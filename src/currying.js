function add(a, b) {
  return a + b;
}

//currying

function add1(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;
console.log(add2(2)(5));
