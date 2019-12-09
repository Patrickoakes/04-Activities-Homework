// Array holds all of the drinks available
var drinkList = [
    "Coffee: $5",
    "Espresso: $7",
    "Cappuccino: $6",
    "Latte: $4",
    "Tea: $3",
    "Ice Coffee: $6",
    "Ice Espresso: $8",
    "Ice Latte: $6",
    "Ice Tea: $4"
];

// 1. Create code that "grabs" the div with the matching id (#drink-options);
// ...
var targetDiv = document.getElementById("drink-options");

//targetDiv.textContent = "Drink Options!!!";

// 2. Create a for loop that creates HTML content of all the drinks using JavaScript.
// HINT: You will need to use each of the following methods: createElement, textContent, appendChild
// ...


for (var i = 0; i < drinkList.length; i++) {

    targetDiv.textContent = drinkList[0];
}

for (var j = 1; j < drinkList.length; j++) {

    var newDiv = document.createElement("div");
    newDiv.textContent = drinkList[j];
    targetDiv.appendChild(newDiv);

}
///SOLVED TRILOGY///////
/*// This line of JavaScript "grabs" the main div on the page ("#drink-options");
    var drinkDiv = document.getElementById("drink-options");

    // We then use a for loop to iterate through all the drinks in drinkList.
    // With each iteration, we perform a series of code operations each time.
    for (var i = 0; i < drinkList.length; i++) {

      // For each drink in the array, we create a new paragraph to hold that text.
      // A new paragraph will be created with each iteration of the loop.
      var newDrinkP = document.createElement("p");

      // We then assign the the text of this paragraph to be the text in the array.
      newDrinkP.textContent = drinkList[i];

      // We then add the paragraph to the our main div on the page ("#drink-options")
      drinkDiv.appendChild(newDrinkP);
    }*/


/////SOLVED TJ/////
/*   {name: 'Coffee', value: 5},
   {name: 'Espresso', value: 7},
   {name: 'Cappuccino', value: 6},
   {name: 'Latte', value: 4},
   {name: 'Tea', value: 3}
 ];

 // 1. Create code that "grabs" the div with the matching id (#drink-options);
 // ...
 // ...
 var drinksContainer = document.querySelector('#drink-options');

 // 2. Create a for loop that creates HTML content of all the drinks using JavaScript.
 // HINT: You will need to use each of the following methods: createElement, textContent, appendChild
 // ...
 // ...
 drinkList.forEach(function(val, index, arr) {
   var newDiv = document.createElement('div');
   newDiv.setAttribute('class', 'item');
   var nameSpan = document.createElement('span');
   var priceSpan = document.createElement('span');
   nameSpan.textContent = val.name + ": ";
   nameSpan.setAttribute('class', 'itemName');
   priceSpan.setAttribute('class', 'itemValue');
   priceSpan.textContent = '$' + val.value;
   newDiv.appendChild(nameSpan);
   newDiv.appendChild(priceSpan);
   drinksContainer.appendChild(newDiv);
 })*/

