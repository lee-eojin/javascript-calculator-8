import { Console } from "@woowacourse/mission-utils";

// OutputView: 출력만 담당
// 메서드 이름은 print로 시작
class OutputView {
  // 계산 결과 출력
  // number: App에서 reduce()로 계산한 합계
  printResult(number) {
    // 템플릿 리터럴로 문자열 조합
    // `결과 : ${number}` -> "결과 : 6"
    Console.print(`결과 : ${number}`);
  }
}

export default OutputView;