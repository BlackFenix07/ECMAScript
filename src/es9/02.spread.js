const user = { username: "blackfenix", age: 23, country: "Colombia" };
const { username, ...values } = user;
console.log(username);
console.log(values);