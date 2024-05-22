let array = [5, 6, 7]; // array destructuring

let one = array[0];
let two = array[1];
let three = array[2];

let obj = {
  test: "DAvid",
  name: 20,
};

let newObj = {
  test: "lalalala",
  ...obj, // spread operator
  baru: "alksdjfaljf",
};

console.log(newObj);
