function subtract(a, b) {
  return a + b;
}

function sum(a, b) {
  return a + b
}

function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
