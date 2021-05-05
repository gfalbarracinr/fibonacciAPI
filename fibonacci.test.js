const fibonacci = require("./fibonacci.js");

describe('Testing Fibonacci sequence', () => {
  let fib = new fibonacci();
  test("Fibonacci of a small number", () => {
    expect(fib.fibonacciOf(1)).toEqual(1);
  });

  test("Fibonacci of a small number", () => {
    expect(fib.fibonacciOf(3)).toEqual(2);
  });

  test("Fibonacci of a small number", () => {
    expect(fib.fibonacciOf(6)).toEqual(8);
  });

  test("Fibonacci of a big number", () => {
    expect(fib.fibonacciOf(40)).toEqual(102334155);
  });
  
})
