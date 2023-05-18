let fruits = ["banana", "apple", "orange", "mango"];

function loadFruits() {
    document.querySelector("#fruits").innerHTML = fruits;
}

function myFunction() {
    let fruit = prompt("What is your favorite fruit?");
    fruits[fruits.length] = fruit;
    document.querySelector("#fruits").innerHTML = fruits;
}