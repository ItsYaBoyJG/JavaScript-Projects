
// Write a recursive function which accepts a number
// and returns the nth number in the Fibonacci sequence.

function fib(num) {
    if (num < 2) return num;
  
    return fib(num - 1) + fib(num - 2);
  }
  
  console.log(fib(4));
  console.log(fib(10)); 
  console.log(fib(28)); 
  console.log(fib(35)); 