class Calculator {
  sum(numbers) {
    return numbers.reduce((accumlator, current) => accumlator + current, 0);
  }
}

export default Calculator;