import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR_MESSAGE } from './constants.js'; 

class App {
  async run() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_PROMPT);

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
      throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    }

    const sum = numbers.reduce((accumlator, current) => accumlator + current, 0);
    // Console.print(`결과 : ${sum}`);
    Console.print(MESSAGE.RESULT + sum); 
  }
}

export default App;
