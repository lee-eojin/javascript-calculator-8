# javascript-calculator-precourse

입력한 문자열에서 숫자를 추출하여 더하는 계산기

### 디렉토리 구조

```
src/
   ├── constants.js
   ├── NonNegativeNumber.js
   ├── Calculator.js
   ├── Parser.js
   ├── App.js
   └── index.js
```

Delimiter 클래스는 Parser.js에 포함 (Parser의 내부 구분자 처리를 위한 클래스라서 함께 구현)


### 기능 목록

- 문자열 입력받기 (Console.readLineAsync)
- 빈 문자열이면 -> 0 반환
- 커스텀 구분자 있는지 확인 (`//`로 시작하는지)
- 커스텀 구분자면 구분자 추출하고 문자열 분리
- 그게 아니면 기본 구분자(쉼표, 콜론)로 분리 및 그 분리한 문자열들을 숫자로 변환
- 음수 있으면 에러 -> 애플리케이션 종료
- 숫자들 다 더하기
- 결과 출력 (Console.print)

### 예외 처리 목록

- 커스텀 구분자가 비어있을경우 에러
- 숫자로 변환할 수 없는 값이 있을경우 에러

### 처리 로직

프로그램 실행의 시작점인 `index.js`에서 `App` 인스턴스를 생성하고 `run()`을 호출한다. `App.run()`은 `Console.readLineAsync()`를 통해 사용자로부터 문자열을 입력받아 `calculate(input)` 메서드로 전달한다.

`App.calculate()`는 먼저 빈 문자열 여부를 확인하여 빈 문자열이면 즉시 0을 반환한다. 그렇지 않으면 `Parser` 인스턴스를 생성하여 `parse(input)`를 호출해 문자열 파싱을 위임한다.

`Parser.parse()`는 입력 문자열이 `//`로 시작하는지 확인하여 커스텀 구분자 사용 여부를 판단한다. 커스텀 구분자인 경우 `//`와 `\n` 사이의 문자를 추출하여 `Delimiter` 인스턴스를 생성하고, 기본 구분자인 경우 쉼표와 콜론을 패턴으로 하는 `Delimiter`를 생성한다. `Delimiter`는 생성 시점에 구분자가 비어있는지 검증하여 빈 구분자면 에러를 발생시킨다.

생성된 `Delimiter`의 `split()` 메서드로 문자열을 분리하여 토큰 배열을 얻는다. 각 토큰은 숫자로 변환되어 `NonNegativeNumber` 생성자에 전달된다. `NonNegativeNumber`는 생성 시점에 값이 음수인지, 그리고 유효한 숫자인지(NaN이 아닌지) 검증한다. 숫자 검증은 `Calculator`가 아닌 `Parser`에서 수행하도록 했다. 파싱 단계에서 잘못된 입력을 걸러내어 `Calculator`는 순수하게 계산 로직만 담당하도록 분리했기 때문이다.

검증이 완료된 `NonNegativeNumber` 배열은 `Calculator` 인스턴스의 `sum()` 메서드로 전달된다. `Calculator.sum()`은 배열을 순회하며 각 `NonNegativeNumber` 객체의 `value` 속성을 합산하여 결과를 반환한다. 최종 결과는 `App.run()`에서 `Console.print()`를 통해 출력된다.


### 트러블슈팅 - readLineAsync의 `\n` 처리 문제

`Console.readLineAsync()`로 입력받은 문자열에서 `\n`은 실제 줄바꿈 문자가 아니라 백슬래시와 n 두 글자로 입력된다.

정규식 `/\n/`으로 매칭하려고 하면 실제 줄바꿈 문자를 찾기 때문에 매칭에 실패한다. 
즉, `Parser`에서 `input.replace(/\\n/g, '\n')`을 통해 문자열 `\\n`을 실제 줄바꿈 문자로 변환한 후 파싱을 진행해야 한다.