"use strict";
const topSalary = function () {
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  const converted = Object.entries(salaries);
  const [john, pete, mary] = converted;

  let biggest = 0;
  if (john[1] > pete[1]) {
    biggest = john;
  } else {
    biggest = pete;
  }
  if (biggest[1] < mary[1]) {
    biggest = mary;
  }
  return biggest;
};

console.log(`TOP SALARY BELONGS TO : ${topSalary()}`);