const person = {
  name: "john",
  address: {
    country: "india",
    city: "Delhi",
  },
};

person.name = "kapil"; //

const newPerson = Object.assign({}, person, { name: "kapil object assign" }); //shallow copy only

//another method  shallow copy only
const anotherPerson = { ...person, name: "kapil destructuring" };
anotherPerson.address.city = "kolkata";
console.log(newPerson);
console.log(anotherPerson);

console.log(person); //original object city gets updated as well because we made shallow copy only

//deep copy

const deepCopiedPerson = JSON.parse(JSON.stringify(person));

deepCopiedPerson.address.city = "mumbai";
console.log(person);
console.log(deepCopiedPerson);

const numbers = [1, 2, 3];

const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log("added", added);

//removing

const removed = numbers.filter((n) => n !== 2);

console.log(removed);

//updating

const updatedArr = numbers.map((n) => (n === 2 ? 20 : n));

console.log(updatedArr);

console.log(numbers); //[1,2,3]  remains unchanged
