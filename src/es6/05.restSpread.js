// ARRAYS DESTRUCTURING.
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

// OBJECT DESTRUCTURING.
let user = { username: "Andrés", age: 23 };
let { username, age } = user;
console.log(username, user.age);

// SPREAD OPERATOR.
let person = { name: "Andrés", age: 23 };
let country = "Colombia";
let data = { id: 1, ...person, country };
console.log(data);

// REST.
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}
sum(1, 1, 2, 3);