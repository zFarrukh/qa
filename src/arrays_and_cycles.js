// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

const movieNames = [
  'Harry Potter',
  'Spiderman: No Way Home',
  'Titanic',
  'Shrek',
];
function outputMovieNames(movies) {
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }
}
// outputMovieNames(movieNames);

// 2. Given an array of car manufacturers, convert the array to a string and back to an array

function arrayToStrToArr() {
  let carManufacturers = [
    'BMW',
    'Ferrari',
    'Buggati',
    'Rolls-Roys',
    'Mercedes',
  ];

  //   Array to string
  carManufacturers = carManufacturers.join(', ');
  console.log(carManufacturers);
  //   String to Array
  carManufacturers = carManufacturers.split(', ');
  console.log(carManufacturers);
}
// arrayToStrToArr();

// 3. Given an array of the names of your friends, add the words hello to each element of the array

let namesOfFriends = [
  'Simba',
  'Pumba',
  'Nemo',
  'Dori',
  'Elvin',
  'Simon',
  'Bruce',
  'Clark',
  'Dominik',
  'Peter',
  'Ben',
  'May',
];

function addHelloToArrElements(arr) {
  arr = arr.map((name) => 'Hello ' + name);
  return arr;
}

// namesOfFriends = addHelloToArrElements(namesOfFriends);
// console.log(namesOfFriends);

// 4. Convert numeric array to Boolean

let numericArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function numericArrToBoolArr(arr) {
  arr = arr.map((num) => Boolean(num));
  return arr;
}

// numericArr = numericArrToBoolArr(numericArr);
// console.log(numericArr);

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order

function sortArrDesc(arr) {
  return arr.sort((a, b) => b - a);
}

// console.log(sortArrDesc([1, 6, 7, 8, 3, 4, 5, 6]));

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3

function filterArrByGreaterThanThree(arr) {
  return arr.filter((num) => {
    return num > 3;
  });
}

// console.log(filterArrByGreaterThanThree([1, 6, 7, 8, 3, 4, 5, 6]));

// 7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function outputArrVersion(arr, number) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      output.push(i);
    }
  }

  return output;
}

function outputJustIndexVersion(arr, number) {
  return arr.indexOf(number);
}

// console.log(outputArrVersion([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 5], 5));
// console.log(outputJustIndexVersion([1, 2, 3, 4, 5, 6], 3));

// 8. Implement a loop that will print the number 'a' until it is less than 10

function printAUntilNumLessThanTen(num) {
  while (num >= 10) {
    console.log('a');
    num--;
  }
}

// printAUntilNumLessThanTen(20);

// 9. Implement a loop that prints prime numbers to the console

function primeNumbersUntilNum(num) {
  const primeNumbers = [];
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }

    return number > 1;
  }
  return primeNumbers;
}

// console.log(primeNumbersUntilNum(100));

// 10. Implement a loop that prints odd numbers to the console

function oddNumbersUntil(num) {
  const oddNums = [];
  for (let i = 1; i < num; i++) {
    if (i % 2 !== 0) {
      oddNums.push(i);
    }
  }

  return oddNums;
}

// console.log(oddNumbersUntil(100));
