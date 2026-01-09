// 이 문제에서 Console은 안 쓰지만 import 해둠 (다른 문제에서 쓸 수도)
import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    // 문자열 입력받기 (예: "//;\n1;2;3" 또는 "1,2:3")
    const stringNumber = await inputView.readStringNumber();

    // let 사용 이유: 아래 if-else에서 값이 바뀌니까
    // const는 재할당 불가, let은 재할당 가능
    let numbers = [];

    // 커스텀 구분자 체크
    // 문자열[인덱스]: 해당 위치의 문자 반환
    // stringNumber[0]은 첫 번째 문자, stringNumber[1]은 두 번째 문자
    if (stringNumber[0] === "/" && stringNumber[1] === "/") {
      // 커스텀 구분자 추출 (3번째 문자)
      // "//;\n1;2;3" -> custom = ";"
      const custom = stringNumber[2];

      // indexOf(): 특정 문자열의 위치(인덱스) 반환
      // "//;\n1;2;3".indexOf("\\n") -> 3 (백슬래시n 시작 위치)
      // 못 찾으면 -1 반환
      const newLineIndex = stringNumber.indexOf("\\n");

      // substring(시작인덱스): 시작인덱스부터 끝까지 잘라서 반환
      // substring(시작, 끝): 시작부터 끝-1까지 반환
      // newLineIndex + 2 하는 이유: "\\n"이 2글자니까 그 다음부터 시작
      // "//;\n1;2;3".substring(5) -> "1;2;3"
      const numberString = stringNumber.substring(newLineIndex + 2);

      // split(구분자): 구분자로 문자열 쪼개서 배열로
      // "1;2;3".split(";") -> ["1", "2", "3"]
      // map(Number): 각 요소를 숫자로 변환
      // ["1", "2", "3"].map(Number) -> [1, 2, 3]
      numbers = numberString.split(custom).map(Number);
    } else {
      // 기본 구분자: 쉼표(,) 또는 콜론(:)
      // 정규표현식 /[,:]/ : 쉼표 또는 콜론
      // [abc]는 a 또는 b 또는 c 중 하나와 매칭
      // "1,2:3".split(/[,:]/) -> ["1", "2", "3"]
      numbers = stringNumber.split(/[,:]/).map(Number);
    }

    // 숫자 배열 검증
    this.#validateNumbers(numbers);

    // reduce(): 배열을 하나의 값으로 축약
    // reduce((누적값, 현재값) => 계산, 초기값)
    // [1, 2, 3].reduce((acc, cur) => acc + cur, 0)
    // 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6 -> 최종 6
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    outputView.printResult(sum);
  }

  // 숫자 배열 검증
  #validateNumbers(numbers) {
    // some(): 하나라도 조건 만족하면 true
    // NaN이 하나라도 있으면 에러 (숫자 아닌 게 섞여있다는 뜻)
    if (numbers.some((num) => Number.isNaN(num))) {
      throw new Error("[ERROR] 잘못된 형식입니다.");
    }

    // 음수가 하나라도 있으면 에러
    if (numbers.some((num) => num < 0)) {
      throw new Error("[ERROR] 양수가 아닙니다.");
    }
  }
}

export default App;
