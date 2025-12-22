import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');

    let parts;
    if (input.startsWith('//')) {
      const newlineIndex = input.indexOf('\\n');
      const delimiter = input.substring(2, newlineIndex);
      const numbersStr = input.substring(newlineIndex + 2);

      parts = numbersStr.split(delimiter);

    } else {
      parts = input.split(/[,:]/);
    }

    const numbers = [];

    for (const str of parts) {
      numbers.push(Number(str));
    }

    if (numbers.some(num => num < 0)) {
      throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
    }

    const sum = numbers.reduce((accumlator, current) => accumlator + current, 0);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
