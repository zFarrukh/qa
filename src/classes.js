class Animal {
  constructor(name) {
    this.name = name;
  }
  move() {
    return this.name + ' can move!';
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

const animal = new Animal('Lion');

console.log(animal.move());

const cat = new Cat('Luck');

console.log(cat.move());
