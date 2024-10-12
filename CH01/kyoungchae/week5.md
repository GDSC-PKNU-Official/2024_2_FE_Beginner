자바스크립트 실습
자바스크립트를 통해 사용자와 상호작용을 구현한다.

<script> 태그: HTML 문서에서 자바스크립트를 시작할 때 사용한다.

document.write('1+1'): 이 코드를 작성하면 결과로 2가 출력된다. 이는 자바스크립트가 동적으로 작동하기 때문이다.

버튼 만들기
버튼 생성: 버튼을 만들기 위해 <input type="button">을 사용한다.
html
코드 복사
<input type="button" value="hi" onclick="alert('hi')">
텍스트 삽입: 버튼에 표시할 텍스트는 value 속성을 통해 설정한다.
경고창 띄우기: 사용자가 버튼을 클릭하면 onclick 이벤트를 통해 경고창이 표시된다. 이러한 작업을 이벤트라고 한다.
텍스트 입력 및 경고창
텍스트 입력: 사용자가 텍스트를 입력할 수 있는 필드를 생성한다.
html
코드 복사
<input type="text" onkeydown="alert('key down!')">
사용자가 키를 입력할 때마다 경고창이 나타난다.
콘솔 사용
브라우저 콘솔: 웹 브라우저의 "검사" 기능을 통해 콘솔에서 자바스크립트를 실행할 수 있다.
데이터 타입
문자열과 숫자: 자바스크립트는 문자열과 숫자라는 두 가지 기본 데이터 타입을 지원한다.

산술 연산자: 다음과 같은 연산자를 사용하여 계산을 수행한다: +, -, *, /.

문자열 조작
문자열은 작은 따옴표로 감싸서 생성한다.

문자열 속성:

.length: 문자열의 길이를 반환한다.
javascript
코드 복사
'hello world'.length; // 결과: 11
.toUpperCase(): 문자열을 대문자로 변환한다.
javascript
코드 복사
'hello world'.toUpperCase(); // 결과: 'HELLO WORLD'
.indexOf('o'): 특정 문자의 인덱스를 반환한다.
javascript
코드 복사
'hello world'.indexOf('o'); // 결과: 4
변수와 대입 연산자
변수 선언: var name = 'egoing';으로 변수를 선언한다.
알림창에 변수 표시:
javascript
코드 복사
alert("텍스트 " + name); // 결과: '텍스트 egoing'
이 코드는 입력된 문자열에 name의 값인 'egoing'이 추가된다.
웹 브라우저 조작
CSS 이해: CSS를 이용해 특정 요소의 속성을 설정하는 방법을 배운다.

태그 선택하기: 속성을 적용할 HTML 요소를 선택해야 한다.

선택자 예시: 클래스를 선택할 때는 $(".myclass")와 같은 선택자를 사용한다.
