import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants.js";

class InputView {
    async readStringNumber() {
        const input = await Console.readLineAsync("\n덧셈할 문자열을 입력해 주세요.");
        return input.split(",").map(Number);
    }
}