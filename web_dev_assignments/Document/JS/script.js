/*
Joseph DeWeese
11 July 2022
Document
*/

console.log(document.querySelector("#firstID").innerHTML);

// . Left hand side changes to the value of the right hand side of the "="

document.querySelector("#firstID").innerHTML = "Changed Text";

//create a variable to hold the query

let answer = document.querySelector(".firstClass");

console.log(answer.innerHTML);
answer.innerHTML = "This can be any text you want"

let userName = prompt("Type in your name");

// target the greeting id and change the text
document.querySelector("#greeting").innerHTML = "Hello "+ userName +" welcome to my page";


//prompt for an item and a cost 

let itemName = prompt("Item name: ");

let itemCost = parseFloat(prompt("How much does a "+itemName+" cost?"));

// put the item info in the h3 element
document.querySelector("#itemInfo").innerHTML="One "+itemName+" cost $"+itemCost;


//how much does ten of those items cost 
let tenItems = 10*itemCost;
//out put to HTML page 
document.querySelector("#tenItemCost").innerHTML = "Ten "+itemName+"s costs: "+tenItems;
