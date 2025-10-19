import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    const result = this.calculate(input);
    Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    if (input === "") {
      return 0;
    }

    const parser = new Parser();
    const numbers = parser.parse(input);

    const calculator = new Calculator();
    return calculator.sum(numbers);
  }
}

export default App;
