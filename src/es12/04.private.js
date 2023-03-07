// Setters Getters.
class user {
    // Constructor.
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // Métodos.
    #speak() { // Método privado.
      return "Hello";
    }
    greeting() {
      return `${this.speak()} ${this.name}`;
    }
    get #uAge() { // Método privado.
      return this.age;
    }
    set #uAge(n) { // Método privado.
      this.age = n;
    }
  }
  
  const bebeloper1 = new user("Santiago", 24);
  console.log(bebeloper1.uAge);
  console.log((bebeloper1.uAge = 20));