// var dieRoll = function () {
//     return Math.ceil(6 * Math.random());
// }

// var firstDie = dieRoll();
// var secondDie = dieRoll();

// console.log(firstDie);
// console.log(secondDie);
// console.log(firstDie + secondDie);

// //////////////////////////

// var getDieRoll = function (dieSize) {
//     var result = Math.ceil(dieSize * Math.random());
//     return result;
// }

// var roll = getDieRoll(6);

// // if (roll > 4) {
// //     console.log("GREAT ROLL " + roll);
// // }

// if (roll == 1 || roll == 2 || roll >= 5) {
//     console.log("GREAT ROLL " + roll);
// }

// console.log("You rolled a " + roll);

// //////////////////////////

// var getDieRoll = function (dieSize) {
//     var result = Math.ceil(dieSize * Math.random());
//     return result;
// }

// var things = [1, 2, 3, "pizza"];
// for (var i = 0; i < things.length; i++) {
//     console.log(things[i]);
// }

// var roll = getDieRoll(6);

// while (roll < 4) {  //may not execute at all
//     console.log(roll);
//     roll = getDieRoll(6);
// }

// do {   // DO WHILE Loops are executed at least once
//     roll = getDieRoll(6);
//     console.log(roll);
// } while (roll > 4);

// for (var i = 0; i < 10; i++) {
//     console.log(roll);
//     roll = getDieRoll(6);
// }

// if (roll >= 3 && roll <= 5) {
//     console.log("GREAT ROLL " + roll);
// } else if (roll == 1) {
//     console.log("You rolled a Terrible Roll  " + roll);
// } else {
//     console.log(roll + " This is an ok roll ");
// }

// console.log("You rolled a " + roll);

// ////////////////////////////////////////

// OBJECTS

// Objects are used to organize related data into a container 
//     - ex console object 
//         group  of functions that interacts with the command line window
//         .log operator is invoked with ()
//         .warn 
//         .error 

// Objects can be more than functions.  
//     they can have state - which is the data that an object stores  
//     they are called properties or attributes of the object 

// console.log(process.title);

var dice = require("./dice.js");  // connects to the js result in dice.js
var die = dice.die;  // connects the obj name dice.js with var die

die.size = 10;

console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("The Total Rolls are " + die.totalRolls);
console.log(die);

// ////////////////////////////////////////

// AUTOMATED TESTING

