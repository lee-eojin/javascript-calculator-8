import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const stringNumber = await inputView.readStringNumber();

    let numbers = [];

    if (stringNumber[0] === "/" && stringNumber[1] === "/") {
      const custom = stringNumber[2];
      const newLineIndex = stringNumber.indexOf("\\n");
      const numberString = stringNumber.substring(newLineIndex + 2);
      numbers = numberString.split(custom).map(Number);
    } else {
      numbers = stringNumber.split(/[,:]/).map(Number);
    }

    if (numbers.some(num => num < 0)) {
    throw new Error("[ERROR] 양수가 아닙니다.");
  }


    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    outputView.printResult(sum);

  
  }
}

export default App;
