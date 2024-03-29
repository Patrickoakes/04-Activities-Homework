$(document).ready(function() {
  // Here we are provided an initial array of letters.
  // Use this array to dynamically create buttons on the screen.
  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "_"
  ];

  // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
  // =================================================================================

  /*   <div id="display"></div>
  <div id="buttons"></div>
  <button id="clear">clear</button>  */
  // 1. Create a for-loop to iterate through the letters array.
  for (i = 0; i < letters.length; i++) {
    // Inside the loop...

    // 2. Create a variable named "letterBtn" equal to $("<button>");

    var letterBtn = $("<button>");
    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".

    /* MINE   //// >         letterBtn<a class="letter"="button"></a>
                          letterBtn<a class="letter-button"="button"></a>
                          letterBtn<a class="letter-button-color"="button"></a>*/

    letterBtn.addClass("letter-button letter letter-button-color");

    // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"

    // MINE ////  >        letters[i] = letterBtn.setAttr$("data-letter");
    letterBtn.attr("data-letter", letters[i]);

    //  5. Then give each "letterBtn" a text equal to "letters[i]".

    //  MINE // >           letterBtn.text.letters[i]

    letterBtn.text(letters[i]);

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).

    // MINE  >              text.appendChild.<div id="buttons"></div>
    $("#buttons").append(letterBtn);
  }

  // Be sure to test that your code works for this major task, before proceeding to the next one!

  // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
  // =================================================================================

  // 7. Create an "on-click" event attached to the ".letter-button" class.
  // MINE >  letterBtn.onCLick(" letter-button " function () {

  $(".letter-button").on("click", function() {
    // Inside the on-click event...

    // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.

    //   MINE >  var fridgeMagnet = ("<div>")

    var fridgeMagnet = $("<div>");

    // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".

    //  MINE >   fridgeMagnet.addCLass("letter fridge-color");

    fridgeMagnet.addClass("letter fridge-color");

    // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
    // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
    // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.

    // MINE >    fridgeMagnet.text($(this).attr("data-letter"))

    fridgeMagnet.text($(this).attr("data-letter"));

    // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
    // Again you can see we use that find, and once its found we append the item

    //   MINE  >   fridgeMagnet.append$("#display");

    $("#display").append(fridgeMagnet);
  });

  // Be sure to test that your code works for this major task, before proceeding to the next one!

  // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
  // =================================================================================

  // 12. Create an "on-click" event attached to the "#clear" button id.

  // Inside the on-click event...

  /// MINE >     $("#clear").downKey(button) {

  $("#clear").on("click", function() {
    /// MINE >        $("empty").$("#display")

    $("#display").empty();
  });

  // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
});
