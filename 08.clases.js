// Declaración.
class User {}

// Instancia de una clase.
// const newUser = new User();

class user {
  // Métodos.
  greeting() {
    return "Hello";
  }
}

const blackfenix = new user();
console.log(blackfenix.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

class user {
  // Constructor.
  constructor() {
    console.log("Nuevo usuario");
  }
  greeting() {
    return "Hello";
  }
}

const santiago = new user();

// This.
class user {
  // Constructor.
  constructor(name) {
    this.name = name;
  }
  // Métodos.
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const alejandro = new user("Alejandro");
console.log(alejandro.greeting());

// Setters Getters.
class user {
  // Constructor.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Métodos.
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user("Santiago", 24);
console.log(bebeloper1.uAge);
console.log((bebeloper1.uAge = 20));