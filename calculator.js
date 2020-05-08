/**
 *Calculator function constructor
 *@constructor
 **/
function Calculator() {
  this.total = 0;
}

// core functionality

/**
 * Add value to current total
 **/
Calculator.prototype.add = function(number) {
  // return this.total = this.total + number;  - the same
  return this.total += number;
}

Calculator.prototype.subtract = function(number) {
  return this.total -= number;
}

Calculator.prototype.multiply = function(number) {
  return this.total *= number;
}

Calculator.prototype.divide = function(number) {
  if (number == 0) {
    throw new Error('Cannot devide by zero!')
  }
  return this.total /= number;
}
