// FLAT.
const array = [1, 1, 1, 1, [2, 2, 2, [3, 3]]];
console.log(array.flat(3));

// FLATMAP.
const array2 = [1, 2, 3, 4];
console.log(array2.flatMap((v) => [v, v * 2]));