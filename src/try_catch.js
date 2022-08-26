// In a try catch construction, wrap the code: console.log (a), let a = 3.
// And display an error - ‘let must be declared’ before use.
// When running 1/0, the error 'cannot be divided by zero'

(function () {
  try {
    console.log(a);
    let a = 3;
  } catch (err) {
    console.log('‘let must be declared’ before use');
  }
})();

function divide(a, b) {
  let sum;
  try {
    if (b === 0) {
      throw new Error('cannot be divided by zero');
    }
    sum = a / b;
  } catch (err) {
    console.log(err.message);
    return;
  }
  return sum;
}

divide(1, 0);
