function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Andrés", "Santiago", "Alejandro"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);