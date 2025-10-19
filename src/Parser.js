import {
  PREFIX,
  NEWLINE,
  DEFAULT_DELIMITERS,
  ESCAPED_NEWLINE,
  ERROR_MESSAGES,
} from "./constants.js";
import NonNegativeNumber from "./NonNegativeNumber.js";

class Delimiter {
  constructor(pattern = DEFAULT_DELIMITERS) {
    if (pattern === "") {
      throw new Error(ERROR_MESSAGES.EMPTY_DELIMITER);
    }
    this.delimiterPattern = pattern;
  }

  split(text) {
    return text.split(this.delimiterPattern);
  }
}

class Parser {
  parse(input) {
    if (input === "") {
      return [];
    }

    if (input.startsWith(PREFIX)) {
      return this.#parseCustomDelimiter(input);
    }
    return this.#parseDefaultDelimiter(input);
  }

  #parseCustomDelimiter(input) {
    const normalized = input.replace(ESCAPED_NEWLINE, NEWLINE);
    const newlineIndex = normalized.indexOf(NEWLINE);
    const customDelimiterString = normalized.substring(PREFIX.length, newlineIndex);

    const delimiter = new Delimiter(customDelimiterString);
    const numbersString = normalized.substring(newlineIndex + 1);
    const numberStrings = delimiter.split(numbersString);

    return this.#createNumbers(numberStrings);
  }

  #parseDefaultDelimiter(input) {
    const delimiter = new Delimiter();
    const numberStrings = delimiter.split(input);

    return this.#createNumbers(numberStrings);
  }

  #createNumbers(tokens) {
    return tokens.map((token) => new NonNegativeNumber(Number(token)));
  }
}

export default Parser;
