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

// ...



