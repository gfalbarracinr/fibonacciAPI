class Fibonacci {
  constructor() {
    this.memory = {};
  }
  fibonacciOf(number) {
    if (number === 0) {
      return 0;
    }
    if (number === 1) {
      return 1;
    }
    if (!this.memory.hasOwnProperty(number - 2)){
      this.memory[number - 2] = this.fibonacciOf(number - 2);
    }
    if (!this.memory.hasOwnProperty(number - 1)){
      this.memory[number - 1] = this.fibonacciOf(number - 1);
    }
    return this.memory[number - 1] + this.memory[number - 2];
  }
}
module.exports = Fibonacci;