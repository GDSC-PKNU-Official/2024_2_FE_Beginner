JS 심화 요약

1. truthy & falsy
+falsy : 불리언 자료형의 false는 아님, 조건식에서 거짓(false)으로 평가
++ falsy로 간주되는 값 7가지
undefined
null
0
-0
NaN (숫자가 아님)
"" (빈 문자열)
0n (BigInt에서 0)
++n은 BigInt 자료형의 값, BigInt : 길이 제약 없이 정수를 다룰 수 있는 숫자 자료형
++ ex) undefined는 falsy 값, !undefined는 참으로 평가, 조건문이 실행
if (!undefined) {
  console.log("undefined는 falsy한 값입니다.");
}
// 결과: "undefined는 falsy한 값입니다."

+truthy : falsy 값을 제외한 모든 값, 조건식에서 참으로 평가
++ex) *"false"는 문자열로, 내용과 상관없이 truthy 값으로 평가
const num = "false";

if (num) {
  console.log("true");
} else {
  console.log("false");
}
// 결과: "true"

+truthy & falsy 활용 :값이 있는지 없는지 확인가능
++ex)
let varA;
if (varA) {
  console.log("값이 있음");
} else {
  console.log("값이 없음");
}
// 결과: "값이 없음"

2. 단락 평가 : 식의 결과가 확실할때, 두 번째 값은 평가하지 않는 것
+AND(&&) 단락 평가 : 첫 번째 값이 false라면 두 번째 값은 계산X
++오류 방지 
undefined나 null은 객체가 아니기 때문에, 점(.)으로 속성에 접근하려고 하면 오류 발생
person && person.name
person이 참인지 확인
undefined, null, false 등과 같은 값은 자바스크립트에서 "falsy"로 평가
person이 undefined나 null이라면, 뒤의 person.name을 아예 실행X
person이 객체라면 person.name을 반환

+OR(||) 단락 평가 : 첫 번째 값이 true라면 두 번째 값은 계산X

+null 병합 연산자(??) : null이나 undefined가 아닌 값을 찾는 연산자
(OR(||) 연산자와 비슷해 보이지만, 0이나 "" 같은 falsy 값은 무시하지 않고 그대로 사용)

3. 객체 자료형 : 원시 자료형을 제외한 모든 자료형은 객체 자료형
+배열 : 인덱스로 연속적인 값을 저장하는 데 특화된 자료형
++length 프로퍼티 : 길이
++push 메서드 : 배열 마지막 요소 뒤에 값을 추가

+함수 : 함수를 값으로 저장하는 함수
++name 프로퍼티 : 해당 함수의 이름을 저장

+침조 : 실제로 값을 저장하는 것이 아니라 값을 저장한 곳의 주소만 저장하는 방식
++객체 복사 : 참조값 복사 , 같은 참조값을 지님, 두개의 객체가 하나의 값을 참조
++참조 비교 : 객체 자료형을 비교할 때는 값이 아닌 참좃값을 비교
(객체의 값이 같더라도 객체가 갖는 참조 값이 다름)

4.반복문
+배열
1)인덱스 :  데이터의 저장 순서를 의미
+인덱스 +반복문=배열의 모든 요소에 접근 가능 (length 프로퍼티 사용)
++ 마지막 인덱스는 length - 1,인덱스는 0부터 시작( 반복문의 종료 조건은 i < arr.length)
2)for…of 문
+배열의 요소를 하나씩 꺼내 **변수 item**에 저장하고, 이를 차례대로 출력
+인덱스 사용X

+객체
1)Object.keys : 객체 메서드, 객체 프로퍼티의 key를 배열로 반환
+ key(이름)만 value(값)도 꺼내고 싶으면 같이 가능
2)Object.values :  key는 필요 없고 값만 꺼내고 싶을 때 사용
3) for...in : 객체의 key(이름)**만 가지고 순서대로 하나씩 꺼내주는 방식
for...in: 상속된 프로퍼티까지 포함해서 순회하고, 반복문을 통해 key를 하나씩 꺼냄.
Object.keys(): 객체의 직접 가진 프로퍼티만 배열로 반환함.

5. 구조 분해 할당 : 배열이나 객체의 값을 한꺼번에 꺼내서 변수에 저장하는 방법
+배열 : 배열에서 순서대로 값을 꺼내 한 번에 변수에 저장
++
let arr = [1, 2, 3];
let [one, two, three] = arr;
console.log(one, two, three);  // 출력: 1 2 3
++ 필요한 값만 꺼내기 : 배열의 일부만 꺼내고 싶다면, 필요한 변수만 선언
++ 값이 부족할 때 : 배열의 값이 부족할 경우, 할당되지 않은 변수에는 자동으로 undefined

+객체 : 객체에서 key를 기준으로 값을 꺼내 변수에 저장

+함수 매개변수 : 객체를 전달받는 함수에서도 구조 분해 할당을 활용해 필요한 값만 꺼낼 수 있음
++변수 이름 바꾸기 : 변수 이름 옆에 콜론:과 함께 새 변수명을 쓰면, 새 이름으로 값이 할당
function func({ name: n, age: a, location: l }) {
  console.log(n, a, l);
}

6.스프레드 연산자 (...) : 각 요소를 개별적으로 분리(배열이나 객체를 풀어서 개별 요소로 분리0
+배열, 객체, 함수 

7.rest매개변수 : 개별 요소를 배열로 다시 묶음 (여러 인수나 데이터를 하나의 배열로 다시 묶어 처리)
+배열, 객체, 함수
++다른 매개변수와 함께 사용
+++rest 매개변수는 반드시 함수의 마지막에 와야 함


8.메서드
1)요소의 추가 및 삭제 
push: 배열의 끝에 요소를 추가
pop: 배열의 끝에서 요소를 제거
shift: 배열의 첫 번째 요소를 제거
unshift: 배열의 첫 번째에 요소를 추가
slice: 배열의 일부분을 추출하여 새로운 배열을 반환 (삭제는 아니지만, 부분 복사)
concat: 두 배열을 합쳐 새로운 배열을 반환
*shift와 unshift는 느림 : 첫번째에 변화를 주면 인덱스가 하나씩 밀려 전부 바뀌어서

2)순회
forEach: 배열의 모든 요소에 대해 함수를 실행

3)탐색 
indexOf: 배열에서 특정 값의 첫 번째 인덱스를 반환
includes: 배열에 특정 값이 존재하는지 여부를 반환
findIndex: 조건을 만족하는 첫 번째 요소의 인덱스를 반환
find: 조건을 만족하는 첫 번째 요소를 반환
filter: 조건을 만족하는 모든 요소를 추출하여 새로운 배열을 반환

4)변형
map: 배열의 각 요소를 새로운 값으로 변환하여 새로운 배열을 반환
sort: 배열을 정렬 (기본은 문자열 기준, 콜백 함수로 커스터마이징 가능)

9. Date 객체와 날짜
+생성자 문법과 리터럴 문법중 생성자 문법만 사용
1) Date 객체 생성
+협정 세계시: UTC는 시간대에 관계없이 전 세계에서 동일한 기준으로 시간을 나타내기 위해 설정된 시간
+타임스탬프: 타임스탬프는 1970년 1월 1일 00:00:00 UTC부터의 밀리초 단위의 시간 경과를 나타냄
- 원하는 날짜로 Date 객체 생성하기
+문자열로 특정 날짜 전달하기: new Date("YYYY-MM-DD") 형식으로 문자열을 사용
+숫자로 특정 날짜 전달하기: new Date(year, monthIndex, day) 형식으로 숫자를 사용 monthIndex는 0부터 시작 (0: 1월, 1: 2월 등)
+타임 스탬프로 날짜 생성하기: new Date(timestamp) 형식으로 타임스탬프를 사용

2) Date 객체에서 날짜 요소 얻기
+getFullYear: 연도를 가져옴
+getMonth: 월을+가져옴 (0부터 11까지)
+getDate: 일을 가져옴 (1부터 31까지)
+getDay: 요일을 가져옴 (0: 일요일, 1: 월요일 등)
+getHours, getMinutes, getSeconds, getMilliseconds: 각각 시, 분, 초, 밀리초를 가져옴

3) Date 객체의 날짜 요소 수정
+setFullYear: 연도를 설정
=setMonth: 월을 설정 (0부터 11까지)
+setDate: 일을 설정 (1부터 31까지)
+setHours, setMinutes, setSeconds: 각각 시, 분, 초를 설정

4) Date 객체 출력
+toString: Date 객체를 문자열로 변환하여 출력
+toDateString: 날짜 부분만 문자열로 변환하여 출력
+toLocaleString, toLocaleDateString: 지역에 맞춰 날짜와 시간을 문자열로 변환하여 출력

10.비동기 처리 : 작업이 완료될 때까지 기다리지 않고 다음 작업을 수행할 수 있게 해주는 프로그래밍 방식
-동기 : 코드가 위에서 아래로 순차적으로 실행
-비동기 : 특정 작업을 기다리지 않고 다른 작업을 동시에 처리

+setTimeout() 함수 : 특정 시간이 지난 후에 주어진 함수를 실행

+콜백 함수 : 비동기 작업이 끝난 후 실행할 함수를 전달

+프로미스(Promise) : 비동기 처리를 목적으로 하는 객체
대기(Pending): 작업이 진행 중
성공(Fulfilled): 작업이 성공적으로 완료됨
실패(Rejected): 작업이 실패함
+const promise = new Promise(실행 함수);
++const promise = new Promise(function (resolve, reject) {
  // 비동기 작업을 수행하는 코드
});
+++	resolve: 비동기 작업이 성공했을 때 호출
	reject: 비동기 작업이 실패했을 때 호출
*then 메서드 : 인수로 전달한 콜백 함수의 비동기 작업이 성공했을 때 실행
*catch 메서드 : 작업이 실패했을 때 실행할 콜백 함수를 설정
