import { Console } from "@woowacourse/mission-utils";
// INPUT_MESSAGE는 안 쓰고 있음 (상수 분리하려다 안 한 듯)
import { INPUT_MESSAGE } from "./constants.js";

// InputView: 입력만 담당
// 검증은 App에서!
class InputView {
  // 덧셈할 문자열 입력받기
  async readStringNumber() {
    // readLineAsync: 메시지 출력하고 입력 대기
    // \n을 메시지 앞에 넣으면 빈 줄 하나 출력 후 메시지 출력
    const input = await Console.readLineAsync(
      "\n덧셈할 문자열을 입력해 주세요."
    );
    // 원본 문자열 그대로 반환
    // 파싱(split 등)은 App에서 처리
    return input;
  }
}

export default InputView;
