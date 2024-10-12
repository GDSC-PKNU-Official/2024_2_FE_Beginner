# 자바스크립트 실전 요약

## script 태그 사용
- 자바스크립트를 HTML에 추가할 때 `<script>` 태그 사용.
- 예시: `document.write('1+1');`를 작성하면 화면에 2가 출력됨.
- 자바스크립트는 HTML과 달리 동적인 동작을 함.

## 버튼 생성
### 예시: `<input type="button" value="hi" onclick="alert('hi')">`
- 버튼 생성 시 `<input type="button">` 사용.
- 버튼에 표시할 텍스트는 `value` 속성으로 설정.
- 클릭 시 경고창을 띄우려면 `onclick="alert()"`을 사용.
- 이벤트 발생을 자바스크립트로 처리.

## 텍스트 입력 필드
### 예시: `<input type="text" onchange="alert('change')">`
- `<input type="text">`로 텍스트 입력 가능.
- 텍스트 입력 후 입력창에서 포커스가 벗어날 때 `onchange` 이벤트 발생.
### 예시: `<input type="text" onkeydown="alert('key down!')">`
- 키를 누를 때 `onkeydown` 이벤트가 발생해 경고창이 뜸.

## 콘솔 사용
- 웹 브라우저에서 개발자 도구의 콘솔 탭에서 자바스크립트 코드를 실행할 수 있음.

## 데이터 타입 - 문자열과 숫자
### 산술 연산자
- 숫자 연산 시 `+`, `-`, `/`, `*` 같은 산술 연산자를 사용.
### 문자열 연산
- 작은따옴표로 문자열을 감쌈.
- `.length`를 사용하면 문자열의 길이를 확인할 수 있음.
- `'hello world'.toUpperCase()`는 문자열을 대문자로 변환.
- `'hello world'.indexOf('o')`는 특정 문자 'o'의 위치를 반환.
- 문자열과 숫자는 각각의 데이터 타입에 따라 다른 결과를 나타냄.

## 변수와 대입 연산자
- 변수 선언: `var name = 'egoing';`
- 문자열에 변수를 결합하려면 `+` 연산자를 사용. 예: `alert("텍스트" + name);` → "텍스트 egoing" 출력.

## 웹 브라우저 제어
- CSS 스타일을 변경하거나 특정 태그의 속성을 제어할 수 있음.
### 태그 선택
- 특정 태그를 선택하여 스타일이나 속성을 변경하기 위해 `selector` 사용. 예: `.myclass`

이 요약본을 바탕으로 자바스크립트의 기초 개념을 빠르게 이해할 수 있습니다. 더 많은 정보는 [GPT Online](https://gptonline.ai/ko/)에서 확인할 수 있습니다.
