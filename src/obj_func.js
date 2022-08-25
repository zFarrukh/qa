// Create a car object, add a color property to it with the value equals 'black'
const car = {
  color: 'black',
  enginePower: 100,
};

// Change the color property of the car object to 'green'
car.color = 'green';

// Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function () {
  console.log(this.enginePower);
};

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function pearsAndApples(pears, apples) {
  return pears + apples;
}

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
function terminal(enteredName) {
  const name = 'Farrukh';
  return name === enteredName ? 'Hello ' + name : 'There is no such name';
}

// Write a function for calculating the type of argument and type output to the console
function getType(arg) {
  console.log(typeof arg);
}

// Write a function that determines whether a number is prime or not
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return 'Number is not prime';
  return num > 1 ? 'Number is prime' : 'Number is not prime';
}
