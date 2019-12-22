// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

/* Create a basic variable

var num = 5;
console.log((num = 7));

// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var fingers = ["pinky", "ring", "middle", "thumb", "index"];
console.log(fingers[1]);

// Create an array of five numbers

var num = [0, 1, 2, 3, 4];
console.log(num[3]);

// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"

var arr = ["My name ", "is ", "Bob ", "five ", "times"];

for (i = 0; i < arr; i++) {
  console.log(arr[i]);
}
console.log("My name is " + arr[2] + "five times");
// Create a for loop that loops through your five string array
for (i = 0; i < arr; i++) {
  console.log(arr[i]);
}
console.log(arr);
// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
function numDiv(dividend, divisor) {
  quotient = dividend / divisor;

  return quotient;
}
console.log(numDiv(4, 2));
// Create a function that takes in an array of numbers and then loops through the array
// and prints out numbers.
// Then call that function

/*function arr(i, num) {
  var num = [0, 1, 2, 3, 4];
  for (i = 0; i < num.length; i++);

  return num[i];
}
console.log(arr(0, [i]));*/

/*function howMany(selectObject) {
  var numberSelected = 0;
  var loop = [0, 1, 2, 3, 4];
  for (var i = 0; i < loop.length; i++) {
    if (selectObject.loop[i]) {
      numberSelected++;
    }
  }
  return numberSelected;
}
console.log(howMany(5, 1));

// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

/*var person = new Object();



var person = {};

var person = {
    firstname = "John",
    lastname = "Smith",
    age = 27
};
console.log(person.age);

// Console log any three of the properties in that object

// Create an Array of 5 Objects

// Console log 3 properties for every one of the five objects

// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.*/

$(document).ready(function() {
  $("#button").click(function() {
    $("#demo").append("<p> Hello World </p>");
  });
});

// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
