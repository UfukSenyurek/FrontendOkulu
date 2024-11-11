// JS Starting

//console.log("Hello my Javascript");

// // variables
// var a = 10;
// var b = 2.3;
// var c = "Mike tomalsonn";
// var d = "33";

// console.log(a, b, c);
// console.log(a + b);
// console.log(a + b+ c);
// console.log(a + c + b + a);

// console.log((a-c)+a );// if its cant be parsed it sa problem
// console.log(typeof (a -c) );
// console.log((a-c));

// console.log((d-a)+a );// auto parsing is happening


// // Adding a string to the page
// document.body.innerHTML += "<p>Hello, this is a string added to the page!</p>";
// document.body.innerHTML += c;


// // this is hoisting !!!
// // in js it executes the code in two parts 
// // part 1 reading part two running
// // in part 1 for variables it takes only variable names not values
// // but for functions it takes all the body of the function

// var firstNumber;
// console.log(firstNumber);
// firstNumber = "hey joe";
// testFunction();
// function testFunction() {
//     console.log(firstNumber);
// }

// var objExample = {
//     name: "Mike",
//     age: 33,
//     isStudent: false,
//     address: {
//         city: "Istanbul",
//         street: "Ataturk"
//     },
//     testFunction: function () {
//         console.log("Test function");
//     }
// }

// document.body.innerHTML += objExample.name;
// console.log(objExample);
// console.log(objExample.toString());


// var arrayExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arrayExample);
// console.log(arrayExample[0]);
// console.log(arrayExample.toString());
// console.log(arrayExample[arrayExample.length - 1]);

// var date = new Date();
// console.log(date);

// var a = 10;
// var b = a;
// console.log(a, b);
// a = 20;
// console.log(a, b);


// var a = [10]
// var b = a;
// console.log(a, b);
// a [0]= 20 ;
// console.log(a, b);

// a = [30 ];
// console.log(a, b);
// console.log(a * b);

var a = [10]
var b = a;
console.log(a, b);
a [0]= 20 ;
console.log(a, b);

a.push(30);
a.push("aa");
console.log(a, b);
