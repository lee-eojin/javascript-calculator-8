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

    const parsedNumbers = this.parseNumbers(input);
    this.validateNumbers(parsedNumbers);
    return this.sum(parsedNumbers);
  }

  parseNumbers(input) {
    if (input.startsWith("//")) {
      return this.parseCustomDelimiter(input);
    }
    return this.parseDefaultDelimiter(input);
  }

  parseCustomDelimiter(input) {
    const normalized = input.replace(/\\n/g, "\n");
    const endIdx = normalized.indexOf("\n");
    const delimiter = normalized.substring("//".length, endIdx);
    const numStr = normalized.substring(endIdx + 1);
    return numStr.split(delimiter).map(Number);
  }

  parseDefaultDelimiter(input) {
    return input.split(/[,:]/).map(Number);
  }

  validateNumbers(numbers) {
    const negative = numbers.find(num => num < 0);
    if (negative !== undefined) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
  }

  sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}
export default App;
