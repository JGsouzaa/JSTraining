// Javascript built-in Date and Math objects

var rightNow = new Date();
alert(rightNow);

//milisecond

var dt = new Date(5878999999855);
alert(dt); //show date in miliseconds from 01 jan 1970

//date string

dt = new Date("Setember 15 , 2016");
alert(dt);

//date with year, month, day, hour, minute, second and miliseconds

dt = new Date(2003, 5, 24, 6, 40, 12, 0);
alert(dt);

//Date objects with methods
var dtm = new Date();

//get Date
document.write("Date: " + dtm.getDate() + "<br>"); //?

//get Day
document.write("Day: " + dtm.getDay() + "<br>"); // sunday -> 0 , monday -> 1

//get Month
document.write("Month: " + dtm.getMonth() + "<br>"); //

//get Full Year
document.write("Full Year: " + dtm.getFullYear() + "<br>"); 

//get Hours
document.write("Hours: " + dtm.getHours() + "<br>"); 

//get minutes
document.write("Minutes: " + dtm.getMinutes() + "<br>"); 

//get seconds
document.write("Seconds: " + dtm.getSeconds() + "<br>"); 

//Math objects handles mathematical operations
var sqr = Math.sqrt(20);
document.write("Square root: " + sqr + "<br>");

//look for minimum number
var min = Math.min(10, 20, 3, 15, 7);
document.write("Minimum: " + min + "<br>");

//look for maximum number
var max = Math.max(10, 20, 3, 15, 7);
document.write("Maximum: " + max + "<br>");

//random number
var rdm = Math.random();
document.write("Random number: " + rdm + "<br>");

//round number
var rnd = Math.round(99.5);
document.write("Rounded: " + rnd + "<br>");

//PI Property
var pi = Math.PI;
document.write("Pi: " + pi + "<br>");




