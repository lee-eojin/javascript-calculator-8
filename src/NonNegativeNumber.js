import { ERROR_MESSAGES } from "./constants.js";

class NonNegativeNumber {
  #value;

  constructor(value) {
    this.#value = value;
    this.#validateValue();
  }

  get value() {
    return this.#value;
  }

  #validateValue() {
    if (this.#value < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (isNaN(this.#value)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
  }
}

export default NonNegativeNumber;
