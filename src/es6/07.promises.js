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
  .catch((error) => console.log(error));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CLASE "PROMESAS" DEL CURSO DE ASINCRONISMO CON JAVASCRIPT.
const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`Hay ${cows} vacas en la granja.`);
  } else {
    reject("No hay suficientes vacas en la granja.");
  }
});
countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Finally"));