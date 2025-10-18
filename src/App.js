import { Console } from "@woowacourse/mission-utils";

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

    const PREFIX = "//";

    if (input.startsWith(PREFIX)) {
      const numbers = this.parseCustomDelimiter(input);
      this.validateNumbers(numbers);
      return this.sum(numbers);
    }
    const numbers = input.split(/[,:]/).map(Number);
    this.validateNumbers(numbers);
    return this.sum(numbers);
  }

  parseCustomDelimiter(input) {
    const normalizedInput = input.replace(/\\n/g, "\n");
    const delimiterEndIndex = normalizedInput.indexOf("\n");
    const customDelimiter = normalizedInput.substring(2, delimiterEndIndex);
    const numberString = normalizedInput.substring(delimiterEndIndex + 1);
    return numberString.split(customDelimiter).map(Number);
  }

  validateNumbers(numbers) {
    const negativeNumber = numbers.find(num => num < 0);
    if (negativeNumber !== undefined) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
  }

  sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}
export default App;
