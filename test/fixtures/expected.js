// if (true)
{
    foo;
}

// if ("foo")
{
    foo;
}

// if ("")

// if ("1" == true)
{
    foo;
}


// if (false)


// if (null)


if (undefined) {
    foo;
}

// if (!true)

// if (!false)
{
    foo;
}

// if ("") else
{
    bar;
}

// if (foo) else
if (foo) {
    foo;
}

// if (foo) {} else { bar; }
if (!foo) {
    bar;
}

// if (false) else

// if (false) else
{
    bar;
}

// if (false) elseif (true) else
{
    bar;
}

// if (true) elseif (false)
{
    foo;
}


// true ? foo : bar;
foo;

// false ? foo : bar;
bar;
