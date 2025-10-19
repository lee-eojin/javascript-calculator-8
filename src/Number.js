import { ERROR_MESSAGES } from "./constants.js";

class Number {
  constructor(value) {
    this.value = value;
    this.#validate();
  }

  #validate() {
    if (this.value < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (isNaN(this.value)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
  }
}

export default Number;
