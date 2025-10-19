import { ERROR_MESSAGES } from "./constants.js";

class NonNegativeNumber {
  constructor(value) {
    this.value = value;
    this.#validateValue();
  }

  #validateValue() {
    if (this.value < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (isNaN(this.value)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
  }
}

export default NonNegativeNumber;
