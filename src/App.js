import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";
import Parser from "./Parser.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_PROMPT);
    
    const parser = new Parser();
    const numbers = parser.parse(input);
    
    const calculator = new Calculator();
    const sum = calculator.sum(numbers);

    Console.print(MESSAGE.RESULT + sum);
  }
}

export default App;
