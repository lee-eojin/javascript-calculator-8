import {
  PREFIX,
  NEWLINE,
  DEFAULT_DELIMITERS,
  ESCAPED_NEWLINE,
  ERROR_MESSAGES,
} from "./constants.js";
import Number from "./Number.js";

class Delimiter {
  constructor() {
    this.delimiterPattern = DEFAULT_DELIMITERS;
  }

  setCustomDelimiter(delimiter) {
    if (delimiter === "") {
      throw new Error(ERROR_MESSAGES.EMPTY_DELIMITER);
    }
    this.delimiterPattern = delimiter;
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

    const delimiter = new Delimiter();
    delimiter.setCustomDelimiter(customDelimiterString);

    const numbersString = normalized.substring(newlineIndex + 1);
    const numberStrings = delimiter.split(numbersString);

    return numberStrings.map((token) => new Number(Number(token)));
  }

  #parseDefaultDelimiter(input) {
    const delimiter = new Delimiter();
    const numberStrings = delimiter.split(input);

    return numberStrings.map((token) => new Number(Number(token)));
  }
}

export default Parser;
