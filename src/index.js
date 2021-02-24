import { compose, pipe } from "lodash/fp";

//not pure function as it will return diff result each time
//can't use random value, date etc in pure function
function myFunction(number) {
  return number * Math.random();
}

console.log(myFunction(5));
console.log(myFunction(5));
console.log(myFunction(5));

//Pure function as it will always return same output for given input
function myPureFunction(number) {
  return number * 2;
}
const minAge = 18;

//if we change minAge then it will no longer be pure function
function isEligible(age) {
  return age > minAge;
}

//now its a pure function as it will return same output for given set of input

function isEligible2(age, minAge) {
  return age > minAge;
}
