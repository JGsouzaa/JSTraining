/*

    Assignment operators

    Operator    Example     Same as
    =           x = y 
    +=          x += y      x = x + y
    -=          x -= y      x = x - y
    *=          x *= y      x = x * y
    /=          x /= y	    x = x / y
    %=          x %= y	    x = x % y
*/

// assignment operator
var x = 50;

// addition assignment operator
var x = 20;
// x += 5;
x = x + 5;

document.write("Addition assignment: ");
document.write(x);

document.write("<br>");     //html line break


// subtraction assignment operator
var x = 20;
// x -= 5;
x = x - 5;

document.write("Subtraction assignment: ");
document.write(x);
document.write("<br>");

// multiplication assignment operator
var x = 20;
// x *= 5;
x = x * 5;

document.write("Multiplication assignment: ");
document.write(x);
document.write("<br>");


// division assignment operator
var x = 20;
// x /= 5;
x = x / 5;

document.write("Division assignment: ");
document.write(x);
document.write("<br>");


// modulus assignment operator
var x = 20;
// x %= 5;
x = x % 5;

document.write("Modulus assignment: ");
document.write(x);
document.write("<br>");