/*
    ARITHMETIC OPERATORS
    +  Adition
    -  Subtraction
    *  Multiplication
    /  Division
    %  Modulus
    ++ Increment
    -- Decrement
*/

var x = 200, y = 20;

var a = x + y;

document.write("Adition: ");
document.write(a);
document.write("<br>");

var s = x - y;

document.write("Subtraction: ");
document.write(s);
document.write("<br>");

var m = x * y;

document.write("Multiplication: ");
document.write(m);
document.write("<br>");

var d = x / y;

document.write("Division: ");
document.write(d);
document.write("<br>");

var mod = x % y;

document.write("Modulus: ");
document.write(mod);
document.write("<br>");

var i = 5;
++i;

document.write("Increment: ");
document.write(i);
document.write("<br>");

var k = 20;
--k;

document.write("Decrement: ");
document.write(k);
document.write("<br>");


/* 
    ++a  <- Prefix increment operator
    a++  <- Postfix increment operator

    --a  <- Prefix decrement operator
    a--  <- Postfix decrement operator
*/

document.write("<br>");

var a = 10;

document.write("Prefix increment: ");
document.write(++a);
document.write("<br>");

var a = 10;
document.write("Postfix increment: ");
document.write(a++);
document.write("<br>");

document.write(a);

document.write("<br>");

var a = 10;

document.write("Prefix decrement: ");
document.write(--a);
document.write("<br>");

var a = 10;
document.write("Postfix decrement: ");
document.write(a--);
document.write("<br>");

document.write(a);

document.write("<br>");