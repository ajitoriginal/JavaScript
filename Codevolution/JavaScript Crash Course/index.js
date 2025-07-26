/*
JavaScript:
    a high level programming language
    one of the core technologies of the world wide web
    can be used to build server side applications
    also used in mobile app development
    also used to create desktop applications
    most popular language according to the 2021 Stack Overflow developer survey

How to run JavaScript:
    Browser
    Node.js runtime

Data Types:
    Primitive - String, Number, Boolean, Undefined, Null, BigInt, Symbol
    Non-Primitive - Objects

Operators:
    a special symbol used to perform operations on values and variables
    Types are:
        Assignment : =
        Arithmetic : +, -, *, /, %, ++, --
        Comparision : ==, ===, <, >, <=, >=, !=, !==
        Logical : &&, ||, !
        String : + (concatination)
        Others : Ternary Operator etc. (condition ? true statement : false statement)
    
Type Conversions:
    Implicit Conversion: type coercion where JavaScript itself will automatically convert the type
    Explicit Conversion: where you manually convert the type

Equality:
    == (Allows coercion)
    === (Does not allow coercion)

Conditional Statements:
    If, else, else if, switch

Looping:
    For loop, While loop, Do..while loop, For..of loop

Functions:
    a block of code designed to perform a particular task
    Ex: Add two numbers, multiply two numbers etc.
    reusable as they can be defined once and can be called with different values resulting in different results
    help divide a complex problem into smaller chunks and makes your program easy to understand and maintain

Scope:
    determines the accessibility or visibility of variables
    Block scope, Function scope, Global scope

Closure:
    A closure is the combination of a function bundled together with references to its surrounding state.
    Closures are created every time a function is created, at function creation time.
    In JavaScript, when we return a function from another function, we are effectively returning a combination of the
    function definition along with the function's scope. This would let the function definition have an associated
    persistent memory which could hold on to live data between executions. That combination of the function and its
    scope chain is what is called a closure in JavaScript.

Function Currying:
    Currying is a process in functional programming in which we transform a function with multiple
    arguments into a sequence of nesting functions that take one argument at a time.
    function f(a,b,c) is transformed to f(a)(b)(c)

this:
    The JavaScript this keyword which is used in a function, refers to the object it belongs to
    It makes functions reusable by letting you decide the object value
    this value is determined entirely by how a function is called
    How to determine this?
        Implicit binding
        Explicit binding
        New binding
        Default binding
    Order of precedence
        New binding
        Explicit binding
        Implicit binding
        Default binding

Itrables and Iterators:
    An object which implements the iterable protocol is called iterable
    For an object to be an iterable it must implement a method at the key [Symbol.iterator]
    That method should not accept any argument and should return an object which
    conforms to the iterator protocol
    The iterator protocol decides whether an object is an iterator
    The object must have a next() method that returns an object with two properties
    value: which gives the current element
    done: which is a boolean value indicating whether or not there are any more elements that could be iterated upon

*/