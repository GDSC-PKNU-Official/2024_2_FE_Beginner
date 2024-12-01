JS기초 요약 정리

-주석달기
// 주석 달기(한줄)
/*~*/ 주석 달기(여러줄)

-console.log(인수)   값 출력
+괄호안에는 값말고도 변수 이름도 가능

-명명규칙

1. 기호 사용
+_ , $ 사용가능
+$는  JQuery를 사용할 때처럼 이 변수가 별도의 라이브러리 객체 라는 것을 가리킬 때 사용
+const $ = "jQuery";
+jQuery는 html요소를 다룰때 코드를 간편히 사용할수 있도록 하는 코드 모음집(라이브러리)
+_는 변수 이름이 두 단어 이상으로 이루어진 합성어일때 사용
+const user_name = "~";

2. 숫자 사용
+변수의 이름을 숫자로 시작하면 안된다 ex) let 2022year = "bad";
+아니면 기호 사용 ex) let _2022year = "good";
+아니면 숫자를 문자 뒤에 배치 ex) let year2022 = "good";

3. 예약어 사용
+자바스크립트에서 이미 사용하기로 한 단어 let, const 등은 변수 이름으로 사용 불가

4. 대소문자 구별
+대소문자 차이가 있으면 다른 변수 ex) Code, code 다름

5. 변수 이름
+변수 이름은 변수값이 어떤걸 의미하는지 알수 있도록 
+변수명은 띄워쓰기 하면 오류
-변수명 표기법 3가지
+카멜 표기법(Camel-Expression) 
++합성어를 사용 할떄 첫글자는 대문자 ***단 맨앞 글자는 소문자로 표시 ex) let totalsalescount
++단어가 많고 길어도 가독성 좋음
+파스칼 표기법(Pascal-Expression) 
++ 모든단어의 첫글자를 대문자로 ex) let TotalSalesCount
++클래스나 함수의이름을 지을때 사용
+스네이크 표기법(Snake-Expression) 
++단어 사이에 ‘_’를 넣는다 ex) let total_sales_count

- JS 기초

1. 변수 : 이름을 가진 값 저장소(값을 바꿀수 있음)
+변수 선언할수 있는 코드 let, var
- let
+ let 변수이름 변수를 선언
+변수이름 = 값; 값을 할당
+let 변수이름 = 값; 변수선언과 동시에 값 할당=변수 초기화?ㅜㅜ
+let으로 변수 선언시 변수 이름 중복 사용 불가
+변수 값 바꾸기 : 변수값을 다시 할당한다
-var
+var로 변수 선언시 이름 중복 사용 가능

2. 상수 : 이름을 가진 값 저장소(값을 바꿀수 없음)
+상수 선언할수 있는 코드 const
-const
+const 변수이름 = 값;
+변수선언과 동시에 값 할당해야함 따로 사용 불가
+대문자로 선언하는게 좋음

3.자료형(원시 자료형) 숫자형, 문자형, 불리언형, null형, undefinde형 5가지
1) 숫자형  소수, 음수, 실수 전부 포함
+사칙연산 가능
++console.log(1 + 2); // 3  더하기
++console.log(1 * 2); // 2  곱하기
++console.log(1 - 2); // -1  빼기
++console.log(1 / 2); // 0.5  나누기
++console.log(1 % 2); // 1  모듈러 (나머지 구하기)
+Infinity  양의 무한대 (최댓값 구할때 사용) * 어떤수를 0으로 나눈 결과
+-Infinity 음의 무한대 (최솟값 구할때 사용)
+NaN 표현이 불가능한 숫자형의 결과 (잘못된 수치 연산=오류)
++ex) const nan1 = 1 * "hello"; 문자와 숫자의 연산

2) 문자형  이름 같은 문자열 포함
+"~" ,'~' 로 감싸 문자형을 알림
+문자형에 덧셈 연산자를 사용하면 두 개의 문자를 이어붙이기 가능
++	let name = "이정환";
	let welcomeText = "님 반가워요!";
	let resultWelcomeText = name + welcomeText;
	console.log(resultWelcomeText); // 이정환님 반가워요!

+`~` (백틱)로도 문자형 만들기 가능  * ${ } 안에 있는 변수 값도 문자열로 변환
++	let guestName = "이정환"; ①
	let greetingText = `welcome ${guestName}!` ②
	console.log(greetingText); // welcome 이정환!
++템플릿 리터럴(TemplateLiteral) 값이 변하는 동적인 문자열 생성할때 사용
+++	let name = "이정환";
	let location = "역곡";
	let introduce = `${name}은 ${location}에 살고 있습니다.`;

	console.log(introduce); // 이정환은 역곡에 살고 있습니다.

3) 불리언
+참(true)거짓(false)만 
+작업을 성공적으로 종료 했는지, 어떤 값이 있는지 등을 확인할 때 유용
++true: 조건이 참일 때, 작업이 성공적으로 완료되었을 때, 또는 값이 존재할 때 사용
++false: 조건이 거짓일 때, 작업이 실패했거나 값이 없을 때 사용

4) null '아무것도 없다'고 의도적으로 할당하는 값
+	let value = null;  // 개발자가 의도적으로 "값이 없다"고 설정한 상태
	console.log(value);  // null

5) undefined 변수가 선언되고 값을 할당하지 않아서 자동으로 할당되는 값
+	let value;
	console.log(value);  // undefined

4. 형 변환
-묵시적 형 변환 
+자바스크립트가 직접 자료형을 스스로 알아서 적절히 변환하는 것

-명시적 형 변환
+숫자, 문자, 불리언 변환이 있다
+내장 함수등을 이용해 의도적으로 형 변환을 하는것
++내장함수 : 자주사용하는 기능을 모아 함수의 형태로 만듬

1) 숫자형으로 변환 (문자형등) 문자-> 숫자
+Number 문자를 숫자로 변환(내장형 함수)
*숫자와 문자가 함께 포함되어있을때는 변환x 오류NaN
++	let strB = "10개";

	let numB = Number(strB);

	console.log(numB); // NaN

+parseInt 문자를 숫자로 변환(내장형 함수)
++숫자와 문자가 함꼐 포함된 문자열 변환가능 
*문자열 첫 글자가 숫자가 아닌 문자라면 오류NaN
++let 변수이름 = parseInt(변환할 문자열 변수이름, 내보낼 진수);
++	let strA = "10";
	let strB = "10개";

	let numA = parseInt(strA, 10); ①
	let numB = parseInt(strB, 10);

	console.log(numA); // 10
	console.log(numB); // 10

2) 문자열로 변환(숫자형을) 숫자-> 문자
+ String 숫자를 문자로 변환(내장 함수)
++	let num = 2022;
	let str = String(num);
	console.log(str); // 2022

3) 불리언으로 변횐
+Boolean 불리언 값으로 변환 (true,false)
++문자열 = true / 빈문자열,숫자0 = false

5. 연산자 +, -, *, / 등 다양한 연산을 수행할 때 도움을 주는 기호 또는 문자
1) 대입 연산자  (=)
+ 변수에 값을 할당함(왼쪽 : 변수 , 오른쪽 : 값이나 다른 변수)
+대입연산자의 결합 방향은 오른쪽에서 왼쪽순
++	let numA = 1;
	let numB;
	let numC;
를 전부 1의 값으로 만드는 방법은 numB = numC = numA; 뿐임

2) 산술 연산자 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지 연산(%)
+곱셈,나눗셈,나머지 연산 >덧샘,뺄셈
++동등한 순위 : 왼쪽에서 오른쪽으로 계산
++(~)먼저 계산

3) 복합 대입 연산자   대입과 산술 연산자를 동시에
+ +=, -=, *=, /=, %=
++	let number = 10;
	number += 10; 
	console.log(number); // 20

4) 증감 연산자 값에 -1,+1  할때 사용
+ --, ++ 연산자를 두번 써서 사용
+후위 연산 증감연산의 결과가 다음행 부터 반영
++ a--, a++
+전위 연산 증감연산자의 결과가 작성한 행부터 적용
++ --a, ++a

5) 논리 연산자 참(true) 거짓(false)인 불리언 값을 다룸
+ OR, AND, NOT 3가지
++  OR : 둘중하나라도 참이면 참 * ||
ex) console.log(boolA || boolB);
++ AND : 둘중 하나라도 거짓이면 거짓 * &&
ex) console.log(boolA && boolB);
++  NOT : 참이면 거짓, 거짓이면 참 결과를 바꿈 * ! 토글 (Toggle)이라 부름
ex) console.log(!boolA); 
     console.log(!boolB);

6) 비교 연산자
+동등 비교 연산자 : 값이 같은지 확인
++ 같다면 true 틀리면 false
- 같다 ===, ==
+ === 값뿐아니라 자료형까지 같은지 확인
++( 값과 자료형이 같으면 참 아니면 거짓)
+ == 값만 같은지 확인 
++(값이 같으면 참 아니면 거짓)
- 같지 않다 !==, !=
+!== 값과 자료형 모두 다른지 확인
++( 값과 자료형 모두 다르면 참 아니면 거짓)
+!= 값만 다른지 확인 
++( 값만 다르면 참 아니면 거짓)

+대소 비교 : 값의 크기 비교
++ >, <, >=, <=
++ 결과가 맞는지에 관해 참 거짓

7) null 병합 연산자 : 값이 있는 변수 찾기
+ ??
++ 피연산자 둘 모두 값이 있다면 왼쪽의 값이 결과로 출력
++피연산자 둘중 하나만 값이 있다면 있는 값으로 결과 출력

8) typeof 연산자
+ 자료형을 확인해 동적타이핑의 오류를 막을 수 있음
++동적 타이핑 : 값에 따라 동적으로 자료형이 결정됨
+	let varA = 1;
	varA = "이정환";
	console.log(typeof varA); // string
++문자형(string)
++숫자형(number)
++참/거짓(boolean)
++null (object)
++undefinde(undefinde)

9) 삼항 조건 연산자
+유일 3개의 피연산자
+조건식 ? 참일 때 명령 수행 : 거짓일 때 명령 수행
++	let num = 1;
	num % 2 === 0 ? console.log("짝수") : console.log("홀수");

++	let num = 1;
	let result = num % 2 === 0 ? "짝수" : "홀수";
	console.log(result);

6. 조건문
-if문
+조건은 많지 않으나 조건별로 수행할 식이 길거나 복잡할때 사용
+if (조건식) {
  참일 때 수행하는 명령
}
+else {
  거짓일 때 수행하는 명령
}
+else if (조건식) {
  참일 때 수행하는 명령
++조건식이 두개 이상일떄 사용(여러개 중첩 사용 가능)

-switch문
+보통 조건의 개수는 많으나 조건별로 수행할 식이 짧을떄 사용
+switch (변수){}
+case 이조건 이라면
+break 끝
+default 조건이 전부 아니면 (생략가능)
+switch (조건식){
	case (조건) : {
		조건과 일치할때 수행할 명령
		break;
		}
	default : {
    		조건이 전부 일치 하지 않을때 수행할 명령
  		}
}

7. 빈복문 for, while, do while 3가지
-for문
+for (초기식; 조건식; 증감식) {
  실행할 명령
}
++초기식 한번만 수행
++조건식 조건이 참이 될떄 까지 반복
++증감식 초기식의 카운터 변수를 증가 또는 감소 시킴
(--,++를 주로 사용 *가끔 복합대입 연산자를 쓰기도 함)
++실행할 명령 반복문이 반복될떄마다 실행됨

-반복문 강제 종료
+berak 사용(if 조건문을 달고 이  조건이 만족되면 종료)
++for (let idx = 1; idx <= 100; idx++) {
  	if (idx > 10) { ①
    		console.log("반복문 종료!");
    		break;
 	 }
  	console.log(idx);
}

-반복문 결과 건너뛰기
+continue 사용
(if 조건문을 달고 이 조건이 만족되면 다음명령으로 넘어가지 말고 그 결과는 건너 뛰고 다시 반복문)
++for (let idx = 1; idx <= 10; idx++) {
  	if (idx % 2 === 0) { ①
    		continue;
 	 }
  	console.log(idx);
}


let width = 10;
let height = 20;
function getArea() {
 
  let area = width * height;

  console.log(area);
}

getArea(); // 200

8. 함수
1) 함수 선언
+function 함수 이름 (매개변수) {
  함수가 수행하는 명령
}

2) 함수 호출
+함수 이름 (매개변수);
+호출하면 선언해둔 함수의 중괄호 안의 명령을 수행

++함수 선언과 호출 ex)
function getArea() {
  let width = 10;
  let height = 20;
  let area = width * height;

  console.log(area);
}

getArea(); // 200

3) 함수 인수,매개변수
+인수 : 함수를 호출할때 소괄호에 적는 값 
+매개 변수 : 함수를 선언할때 소괄호에 적는 인수를 저장하는 변수
++  인수 매개변수 활용 ex)
function getArea(width, height) { // ②
  let area = width * height;
  console.log(area);
}

getArea(10, 20); // ① 200

4) 함수 반환
+함수를 호출할때 인수를 전달하고 매개변수로 저장되서 코드를 수행하고 결과가 나옴
->여기서 결과를 return 써서 다시 값을 반환해서 반환값을 변수에 저장 그걸 출력
function getArea(width, height) {
  let area = width * height;
  return area; // ①
  console.log("함수 종료"); // ②
}

let result = getArea(10, 20);
console.log(result); // 200
++*return을 쓰면 다음 코드는 실행되지 않고 끝남

5) 중첩 함수
+함수안에 함수 선언하기
++많이 쓰면 가독성 떨어짐
function greeting() {
  function greetingWithName(name) { // ①
    console.log(`hello! ${name}`);
  }

  let name = "이정환";
  greetingWithName(name); // ②
}

greeting(); // hello! 이정환

6) 호이스팅
+ 함수를 선언하기 전에 먼저 호출해도 오류가 안남 *함수 표현식 제외

7) 함수 표현식 :변수에 함수를 값으로 저장 *호이스팅 안됨
+ 변수에서 함수 선언 ex) 
let greeting = function () {
  console.log("hello");
};
greeting(); // hello
++ 변수에 함수를 저장  변수 이름으로 함수를 호출 가능
-> 변수의 이름으로 호출해서 함수의이름을 안씀 : 익명 함수

+선언한 함수 변수에 저장ex)
function greetFunc() {
  console.log("hello");
}

let greeting = greetFunc; ①
greeting(); // hello
++함수를 값으로 변수에 저장할떄 소괄호X

8) 콜백 함수  
+함수를 다른 함수의 인수(인수=값)로 저장하는것
+함수를 인수로 받는 함수 : 고차 함수
function parentFunc(callBack) {
  console.log("parent");
  callBack();
}

function childFunc() {
  console.log("child");
}

parentFunc(childFunc); // 
-콜백 함수 필요 이유
function repeat(count, callBack) { // ③
  for (let idx = 0; idx < count; idx++) {
    callBack(idx + 1);
  }
}

function origin(count) {
  console.log(count);
}

function double(count) { // ①
  console.log(count * 2);
}

repeat(5, double); 

-콜백함수 함수 표현 이용

function repeat(count, callBack) {
  for (let idx = 0; idx < count; idx++) {
    callBack(idx + 1);
  }
}

const double = function (count) { // ①
  console.log(count * 2);
};

repeat(5, double); // ② 

// 출력 : 2 4 6 8 10

9) 화살표 함수 
+익명 함수를 매우 간결하게 작성할 때 사용하는 함수 표현식의 단축 문법
+let funcA = (매개변수) => 반환값;
++function 지우고 매개 변수뒤 => 
++함수 본문 한줄 () , 생략 , return 생략
let greeting = (name) => `hello ${name}`;
const greetingText = greeting("이정환");

console.log(greetingText); // hello 이정환

++ 함수 본문 여러줄  {}
let greeting = (name) => {
  let greetingText = `hello ${name}`;
  return greetingText;
};

console.log(greeting("이정환"));

// hello 이정환

++콜백
let isConfirm = true;

function confirm(onYes, onNo) {
  if (isConfirm) onYes();
  else onNo();
}

confirm(
  () => console.log("승인"), // ①
  () => console.log("거부") // ②
);

// 승인

9. 스코프 : 변수나 함수에 접근하거나 호출할 수 있는 범위
- 전역 스코프 : 전체 영역에서 접근 가능
+어디서든 변수에 접근 가능 전체적으로 변수 선언됨
-지역 스코프 : 특정 영역만 접근 가능
+ 함수,반복문등 안에서만 변수가 선언되어  밖에서는 변수가 선언된게 아님
+블록 스코프, 함수 스코프 (지역 스코프 종류)
++블록 스코프 : 블록 내부에서 선언한 변수가 갖는 스코프 {}기준
++함수 스코프 : 함수 내부에서 선언한 변수가 갖는 스코프 함수 기준


10. 객체
1) 생성
let objA = {};  // '객체 리터럴' 문법
let objB = new Object(); // '객체 생성자' 문법
+ 주로 리터널 문법이 사용됨
++중괄호 안에 key : value 이렇게 넣고 여러개면 ,로 구분
*key는 문자형 사용(복수의 단어들 이면 ""로 묶기), 중복 사용 불가(마지막 작성한걸로 도출)
let person = {
  name: "이정환", 
  age: 25 
+프로퍼티 : 객체를 설명하는 정보(key와 value로 이루어진 프로퍼티)
++객체 person은 사람을 의미하므로 “사람의 속성으로 이름과 나이가 있다”

2)프로퍼티 다루기 :
+객체에서 프로퍼티를 찾고, 추가하고, 삭제하는 등의 모든 연산은 key를 이용해 수행
-접근 
+ 점 표기법 : 객체 이름.key ;
+ 괄호 표기법 : 객체 이름["key"];

-추가
+ 점 표기법 : 객체 이름.key (key가 고정적)
++person.gender = "male";
+ 괄호 표기법 : 객체 이름["key"] (key가 변수에 저장된 값처럼 유동적)
++person["nickname"] = "winterlood";
++유동적 추가 ex)
function addProperty(obj, key, value) {
  obj[key] = value; // ②
}

let obj = {};

addProperty(obj, "a", 1); // ①
addProperty(obj, "b", 2);
addProperty(obj, "c", 3);

console.log(obj); // {a: 1, b: 2, c: 3}

-수정
+ 점 표기법 : 객체 이름.key ;
+ 괄호 표기법 : 객체 이름["key"];;'

-삭제
+delete 객체 이름.key ;
+delete 객체 이름["key"];

3) 상수 객체의 프로퍼티
+객체 자체를 없애지 않는 한, 프로퍼티를 자유롭게 추가하거나 삭제, 수정가능

4) in 연산자
+객체에 존재하지 않는 프로퍼티에 접근하면 undefined
+확인할key in 객체 
++let isNameExist = "name" in person;

5) 매서드 : 객체에서 값(value)이 함수인 프로퍼티
let person = {
  sayHi: function () {
    console.log("안녕");
  }
};

person.sayHi(); // 안녕

11. 배열
-배열 선언
+let arrB = [];
++대괄호 안의 값은 ,로 구분
++값으로 어떤 자료형도 가능

-배열 인덱스
+인덱스 : 배열에서 데이터의 위치를 나타냄
++console.log(food[0]);
++0부터 순서대로
