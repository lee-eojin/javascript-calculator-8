class Calculator {
  sum(numbers) {
    return numbers.reduce((acc, number) => acc + number.value, 0);
  }
}

export default Calculator;
