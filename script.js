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
let userInput = [];
const promptUser = function() {
  let getArr = prompt("insert your array");
  if (getArr !== " ") {
    getArr = getArr.split(",");
    userInput.push(getArr);
    promptUser();
  } else {
    console.log(userInput);
  }
};

promptUser();

let newArr = [];
const sortArr = function (arrayOfArrays) {
  arrayOfArrays.forEach((item) => {
    newArr = newArr.concat(item);
  });
  return newArr;
};

console.log(sortArr(userInput).sort((a, b) => b-a).toString(userInput));
