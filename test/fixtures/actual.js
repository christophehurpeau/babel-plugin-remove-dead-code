
// if (true)
if (true) {
    foo;
}

// if ("foo")
if ("foo") {
    foo;
}

// if ("")
if ("") {
    foo;
}

// if ("1" == true)
if ("1" == true) {
    foo;
}

// if (false)
if (false) {
    foo;
}

// if (null)
if (null) {
    foo;
}

if (undefined) {
    foo;
}

// if (!true)
if (!true) {
    foo;
}

// if (!false)
if (!false) {
    foo;
}


// if ("") else
if ("") {
    foo;
} else {
    bar;
}


// if (foo) else
if (foo) {
    foo;
} else {
}


// if (foo) {} else { bar; }
if (foo) {
} else {
    bar;
}

// if (false) else
if (false) {
    foo;
} else {
}

// if (false) else
if (false) {
} else {
    bar;
}

// if (false) elseif (true) else
if (false) {
    foo;
} else if (true) {
    bar;
} else {
    foobar;
}

// if (true) elseif (false)
if (true) {
    foo;
} else if (false) {
    bar;
}

// true ? foo : bar;
true ? foo : bar;

// false ? foo : bar;
false ? foo : bar;
