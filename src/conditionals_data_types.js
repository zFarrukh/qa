/* Addition */

// string + boolean
console.log('hello ' + false); // output = 'hello false' typeof string
// string + number
console.log('5' + 5); // output = '55' typeof string
// number + boolean
console.log(true + 4); // output = 5 typeof number

/* Multiplication  */

// string * boolean
console.log('str' * 5); // output = NaN typeof number
console.log('5' * 5); //output = 25 typeof number
// string * boolean
console.log(true * 'false'); // output = NaN typeof number
console.log(true * '5'); // output = 5 typeof number
// number * boolean
console.log(10 * false); // output = 0 typeof number

/* Division */

// string / boolean
console.log('5' / true); //output = 5 typeof number
console.log('dd' / false); // output = NaN typeof number
// string / number
console.log('5' / 5); //output = 1 typeof number
console.log('hello' / 2); // output = NaN typeof number
// number / boolean
console.log(true / 1); // output = 1 typeof number

/* Explicit type conversion */

// Number
console.log(Number('adfs')); // output = NaN
console.log(Number('14')); // output = 14
console.log(Number(true)); // output = 1
console.log(Number(false)); // output = 0

// String
console.log(String(10)); // output = '10'
console.log(String(true)); // output = 'true'

// Boolean
console.log(Boolean(10)); // output = true
console.log(Boolean(0)); // output = false
console.log(Boolean('')); // output = false
console.log(Boolean('false')); // output = true
