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
      const delimiterEndIndex = input.indexOf("\n");
      const customDelimiter = input.substring(PREFIX.length, delimiterEndIndex);
      const numberString = input.substring(delimiterEndIndex + 1);

      console.log("커스텀 구분자:", customDelimiter);
      console.log("숫자 부분:", numberString);
      return 0;
    }
    const numbers = input.split(/[,:]/).map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
  }
}

export default App;
