var carName = "Volvo";
var carName;

let bikeName = "Volvo";
// let bikeName = "Revolver";

var x = 2;
// let x = 3;


/*
Strings Methods
*/
console.log(carName + bikeName + x);

carName = "BMW";
console.log(carName);

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

part = text.slice(7);
console.log(part);

part = text.slice(-12);
console.log(part);

part = text.slice(-12, -6);
console.log(part);

part = text.substr(7, 4);
console.log(part);

text = "Please Kill me!"
part = text.replace("Kill", "Save");
console.log(part);

let newText = "Please visit Microsoft and Microsoft!";
let newNewText = newText.replace(/Microsoft/g, "W3Schools");
console.log(newNewText);

let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
console.log(text2);

var msg = "5";
msg = msg.padStart(4, "x");
console.log(msg);

var arr = newText.split(" ");
console.log(arr);

/*
Array and Array methods 
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let aFruit = fruits.shift();
fruits.unshift("Papaya");
delete fruits[1];
const veggies = ["Tomato", "Brocoli", "Cauliflower"];
veggies.splice(3, 1, "Spinach", "Potato");
console.log(veggies);
console.log(fruits.toString(), aFruit, fruits.concat(veggies));

const numArray = [40, 73, 23, 63, 93];
numArray.sort(function(a, b){return b - a});
numArray.sort(function(a, b){return 0.5 - Math.random()});
console.log(numArray);

console.log(Math.max.apply(null, numArray));

/*
The Fisher Yates Method
This method shuffles the array randomly
*/

const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(points);

/* sorting object arrays */

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort(function(a, b){return a.year - b.year});

let maxPosition = cars.indexOf("Saab");

const newArr = Array.from("ABCDEFG");

console.log(cars[0].year, newArr.includes("A"));
console.log(new Date(0));
console.log(this);