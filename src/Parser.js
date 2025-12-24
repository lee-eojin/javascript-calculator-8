import { ERROR_MESSAGE } from "./constants";

class Parser {
  parse(input) {
    let parts;
    if (input.startsWith("//")) {
      const newlineIndex = input.indexOf("\\n");
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
    if (numbers.some((num) => num < 0)) {
      throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    }
    return numbers;
  }
}

export default Parser;
