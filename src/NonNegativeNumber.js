import { ERROR_MESSAGES } from "./constants.js";

class NonNegativeNumber {
  #value;

  constructor(value) {
    this.#validateValue(value);
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  #validateValue(value) {
    if (value < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (isNaN(value)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
  }
}

export default NonNegativeNumber;
