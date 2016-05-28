export default function ({ types: t }) {
  return {
    visitor: {
      'BinaryExpression|UnaryExpression'(path) {
        let evaluated = path.evaluate();
        if (evaluated.confident) {
          console.log(path.node, evaluated.value)
          path.replaceWith(t.valueToNode(evaluated.value));
        }
      },

      IfStatement: {
        exit(path) {
          const node = path.node
          var consequent = node.consequent;
          var alternate  = node.alternate;
          var test = node.test;


          // we can check if a test will be falsy 100% and if so we can inline the
          // alternate if there is one and completely remove the consequent
          //
          //   if ("") { bar; } else { foo; } -> { foo; }
          //   if ("") { bar; } ->
          //
          if (t.isNullLiteral(test) || (
              (t.isBooleanLiteral(test) || t.isNumericLiteral(test) || t.isStringLiteral(test)) && !test.value)) {
            if (alternate && alternate.body.length) {
              path.replaceWith(alternate);
            } else {
              path.remove();
            }
            return;
          }

          // we can check if a test will be truthy 100% and if so then we can inline
          // the consequent and completely ignore the alternate
          //
          //   if (true) { foo; } -> { foo; }
          //   if ("foo") { foo; } -> { foo; }
          //
          if ((t.isBooleanLiteral(test) || t.isNumericLiteral(test) || t.isStringLiteral(test)) && test.value) {
            path.replaceWith(consequent);
            return;
          }

          // remove alternate blocks that are empty
          //
          //   if (foo) { foo; } else {} -> if (foo) { foo; }
          //

          if (t.isBlockStatement(alternate) && !alternate.body.length) {
            alternate = node.alternate = null;
          }

          // if the consequent block is empty turn alternate blocks into a consequent
          // and flip the test
          //
          //   if (foo) {} else { bar; } -> if (!foo) { bar; }
          //

          if (t.isBlockStatement(consequent) && !consequent.body.length && t.isBlockStatement(alternate) && alternate.body.length) {
            node.consequent = node.alternate;
            node.alternate  = null;
            node.test       = t.unaryExpression("!", test, true);
          }
        }
      }
    }
  };
}
