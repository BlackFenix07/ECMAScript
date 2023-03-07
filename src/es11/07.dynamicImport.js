const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./07.dynamicImport.mjs");
  console.log(module);
  module.hello();
});