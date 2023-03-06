const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Genial, funcionó.");
    } else {
      reject("Ups, no funcióno.");
    }
  });
};
anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));