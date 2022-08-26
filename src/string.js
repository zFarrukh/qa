// 1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb,
// acb, aeb by pattern: letter 'a', any character, letter 'b'

const string = 'ahb acb aeb aeeb adcb axeb';
const regex = /a[a-z|A-Z]b/g;
console.log(string.match(regex));

// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const reg = /2\s\+\s3/;
const str = '2 + 3 223 2223';

console.log(str.match(reg));

// 3. Get the day, month and year of the current date and output it to the console separately

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

console.log(`Day:\t${day}\nMonth:\t${month}\nYear:\t${year}`);
