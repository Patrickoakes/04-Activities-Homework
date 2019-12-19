// This document.ready isn't necessary in this example... but is needed in cases where the HTML is complex.
// This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
// It's useful to become familiar with now.

$(document).ready(function() {
  // VARIABLES
  // ====================================================================
  // Here we create variables for tracking the number of sandwiches eaten
  // ...
  var pbjCounter = 0;
  var grilledCheeseCounter = 0;
  var roastBeefCounter = 0;

  // ...

  // FUNCTIONS
  // ====================================================================
  // Here we create various on "click" functions which capture the clicks
  // Inside each click event is the code to create an alert, update the counter, then show the updated count.
  // ...
  $("#pbj").on("click", function() {
    alert("Lotta sugar.....Ooops");
    pbjCounter++;
    alert("You've eaten " + pbjCounter + " PB&J sandwiches");
  });

  $("#grilledcheese").on("click", function() {
    alert("Grilled cheese farts, lactose innntoleranttt");
    grilledCheeseCounter++;
    alert(
      "You've eaten " + grilledCheeseCounter + " grilled cheese sandwiches"
    );
  });
  $("#roastbeef").on("click", function() {
    alert(" Roast Beast here I come.");
    roastBeefCounter++;
    alert("You've eaten " + roastBeefCounter + " roast beef sandwiches");
  });
});
