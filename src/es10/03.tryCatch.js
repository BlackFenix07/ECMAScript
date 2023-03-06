try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  onotherFn();
} catch {
  console.log("Esto es un error.");
}