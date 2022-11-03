// "use strict";

//------------answer 1 -------------

// const topSalary = function () {
//   let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//   };

//   const converted = Object.entries(salaries);
//   const [john, pete, mary] = converted;

//   let biggest = 0;
//   if (john[1] > pete[1]) {
//     biggest = john;
//   } else {
//     biggest = pete;
//   }
//   if (biggest[1] < mary[1]) {
//     biggest = mary;
//   }
//   return biggest;
// };

// console.log(`TOP SALARY BELONGS TO : ${topSalary()}`);

//-------------------------------------

//---------------answer 2--------------
// let userInput = [];
// const promptUser = function() {
//   let getArr = prompt("insert your array");
//   if (getArr !== " ") {
//     getArr = getArr.split(",");
//     userInput.push(getArr);
//     promptUser();
//   } else {
//     console.log(userInput);
//   }
// };

// promptUser();

// let newArr = [];
// const sortArr = function (arrayOfArrays) {
//   arrayOfArrays.forEach((item) => {
//     newArr = newArr.concat(item);
//   });
//   return newArr;
// };

// console.log(sortArr(userInput).sort((a, b) => b-a).toString(userInput));

//----------------answer3-------------

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// let uniqueArr = function (any) {
//   for (let i = 0; i < any.length; i++) {
//     for (let j = any.length-1; j>=0 ; j--) {
//       if (i !== j) {
//         if (any[j] === any[i]) {
//           any.splice(j,1);
//         }
//       }
//     }
//   }
//   return any;
// };
// console.log(uniqueArr(values));

//--------------------answer 4-------------------

// let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// let aclean = function (words) {
//   let cloneWords = [...words];

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let alphabetical = word.split("").sort().join("").toLowerCase();

//     for (let j = words.length-1; j>=0 ; j--) {
//   if (i === j) {
//         continue;
//       }

//       var other = words[j];
//       if (alphabetical === other.split("").sort().join("").toLowerCase()) {
//         cloneWords.splice(j, 1);
//         words.splice(j, 1);
//       }
//     }
//   }
//   return cloneWords;
// };

// console.log(aclean(words));
//---------------------quiz 8 answer7---------------------------

// function calc(operator) {
//   switch (operator) {
//     case "+":
//       return function(a,b){
//        return a+b;
//       }
//       break;
//       case "-":
//         return function(a,b){
//          return a-b;
//         }
//         break;
//         case "/":
//       return function(a,b){
//        return a/b;
//       }
//       break;
//       case "*":
//         return function(a,b){
//          return a*b;
//         }
// break;
//   }

// }
// const result = calc("+");

// console.log(result(3,4));
//------------------------------------------------------------------
