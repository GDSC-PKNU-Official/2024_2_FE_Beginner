# 자바스크립트 실전
## 1.truthy & falsy
 - falsy : 거짓과 같은 의미
 - 조건식에서 거짓으로 평가
 - falsy한 값: undefined, null,0, -0, "", On
 - true값 : !연산자를 붙이면 참이 되어 if문 수행
 ### truthy &falsy 응용하기
  1. 값이 비었다:undefined나 null일 때 쓰이는 표현
  2.  0과 -0 그리고 NaN을 제외한 모든 값은 truthy
## 2.단락 평가
-  첫 번째 피연산자의 값만으로 해당 식의 결과가 확실할때, 두 번째 값은 평가하지 않는 것
  ### 1.AND 평가
    - && 연산자는 피연산자의 값이 하나라도 거짓이면 거짓을 반환
    - ND나 OR 논리 연산은 피연산자의 값이 truthy 또는 falsy하면 해당값을 그대로 반환
  ### 2 OR단락 평가
   -  연산자는 피연산자의 값이 하나라도 참이면 참을 반환
   #### OR 단락 평가와 null 병합 연산자의 차이점
   - null 병합 연산자는 값이 null이나 undefined가 아닌 피연산자
   - truthy와 falsy로 동작하는 || 연산자와는 엄밀히 다른 동작을 수행
 ## 3. 객체 자료형 자세히 살펴보기
 ### 배열과 함수가 객체인 이유
- 배열: 인덱스로 연속적인 값을 저장하는 데 특화된 자료형
- 자바스크립트의 배열에는 일반 객체에 있는 프로퍼티와 메서드
- push 메서드: 배열 마지막 요소 뒤에 값을 추가하는 메서드
### 객체와 참조
- 함수와 배열 같은 객체 자료형은 여러 개의 값을 저장
- 원시 자료형은 값을 크기가 일정한 공간에 저장
- 객체 자료형은 값이 동적으로 늘어나거나 줄어들기 때문에 일정한 크기의 공간에 저장할 수 없음
### 원시 자료형과 객체 자료형의 저장 방식 비교
- 객체: 컴퓨터의 메모리 어딘가에 저장되고,변수 person은 객체를 참조할 수 있는 주솟값을 저장
- 객체 자료형은 원시 자료형과 다르게 참조 형식으로 변수를 저장
### 참조에 의한 비교 
- 객체 자료형과 원시 자료형은 저장 방식이 다르기 때문에 값을 비교하는 방법도 다름
## 4. 반복문 응용하기
 ### 배열과 반복문
  - 배열은 순서대로 데이터를 저장하는 특징
  #### 인덱스를 이용한 순회
  - 배열에는 데이터의 저장 순서를 의미하는 인덱스가 있음
  -  배열은 저장 요소의 개수에 따라 길이가 자동으로 늘어나고 줄어드는 동적인 특징이 있음
  -  프로퍼티 length를 이용함녀 쉽게 배열의 현재 길이를 알아낼 수 있음
  -  주의: 반복문의 종료 조건은 i <= food.length가 아니라 i < food.length로 설정
 #### for...of문을 이용한 순회
  - for...of 문은 for 문과 달리 of 뒤의 배열에서 요소를 하나씩 순서대로 꺼내 변수 item에 저장
 #### 객체와 반복문
  - 자바스크립트로 프로그래밍하다 보면 배열이 아닌 객체를 순회하는 경우도 종종 발생
 ### Object. keys를 이용한 key 순회
  - 객체 매서드인 Object.keys는 객체 프로퍼티의 key를 배열로 반환
  - Object.keys 메서드는 인수로 전달한 객체에서 프로퍼티의 key만 배열로 만들어 반환
 ### Object.values를 이용한 value 순회
  - Object.keys 말고도 프로퍼티의 value만 배열로 반환하는 Object.values 메서드
 #### for...in 문을 이용한 순회
  - 배열을 순회할 때의 for...of 문처럼, 객체를 순회할 때는 for...in 문을 사용
 ## 5.구조 분해 할당
  - 배열을 구조 분해 할당하면, 저장된 요솟값을 변수 선언과 동시에 순서대로 할당
  - 배열의 길이와 할당할 변수의 개수가 일치하지 않아도 오류가 발생하지 않음
 ### 객체의 구조 분해 할당
  - 배열뿐만 아니라 객체도 구조 분해 할당이 가능
  - 객체를 구조 분해 할당할 때는 데이터 저장 순서가 아니라 key를 기준으로 함
 ### 함수의 매개변수가 객체일 떄 구조 분해 할당하기
  -  func에서는 전달된 객체에서 프로퍼티의 value를 매개변수 name, age, location에 각각 구조 분해 할당
  -  객체를 전달할 때 이 문법을 함수의 매개변수에 적용하면, 필요한 프로퍼티만 전달할 수도 있어 코드가 훨씬 더 유연
  -  객체의 구조 분해 할당 과정에서 매개변수의 이름을 새롭게 바꿀 수 있음
### 스프레드 연산자와 rest 매개변수
 - 스프레드(spread) 연산자는 기호로는 ‘...’로 표기하는데, 전개 연산자
 - 배열, 문자열, 객체 등과 같이 반복이 가능한 객체의 값을 개별 요소로 분리
  #### rest 매개변수
 - rest 매개변수: 나머지 매개변수라고 하며, 스프레드 연산자처럼 기호 ‘...’으로 표기
 - 매개변수로 사용할 변수의 이름 앞에 ...을 붙이면 rest 매개변수가 됨
## 7.배열과 메서드
-배열 요소란 배열에 담긴 하나의 값
 ### push
  - 배열 맨 끝에 요소를 추가하고 새로운 길이를 반환하는 메서드
 ### pop
 -  배열의 맨 끝 요소를 제거하고, 제거한 요소를 반환하는 메서드
 -  빈 배열에서 pop 메서드를 사용하면, 제거할 요소가 없기 때문에 undefined를 반환
 ### shift  
 - hift는 pop 메서드와 반대로 배열의 맨 앞 요소를 제거하고, 제거한 요소를 반환하는 메서드
 ### unshift
 - unshift는 push와 반대로 배열 맨 앞에 요소를 추가하고, 새 배열의 길이를 반환하는 메서드
 ### slice
 - slice 메서드는 마치 가위처럼 기존 배열에서 특정 범위를 잘라 새로운 배열을 반환
 - slice 메서드에서는 잘라내려는 배열의 범위를 지정하는 두 개의 인수를 전달
 - start는 잘라낼 범위의 시작, end는 잘라낼 범위의 끝을 지정하는 인덱스
 - slice 메서드에서 start만 전달하고 end를 전달하지 않으면, start부터 배열 끝까지 잘라낸 새 배열을 반환
 -  end 없이 start만 음수 인덱스로 전달하면, 배열 맨 끝부터 전달한 음수의 절댓값만큼 잘라낸 새 배열을 반환
   ### concat
   - concat은 서로 다른 배열을 이어 붙여 새 배열을 반환하는 메서드
  ### 순회 메서드
  - 자바스크립트는 반복문 말고도 배열 순회 메서드를 제공
  - item: 현재 순회하는 배열 요소 
  - idx: 현재 순회하는 배열 요소의 인덱스 
  - arr: 순회 중인 배열
  ### 탐색 메서드
  - 특정 조건을 만족하는 요소를 찾아내는 행위
  - indexOf: 배열에서 찾으려는 요소의 인덱스를 반환하는 메서드
  - includes:배열에 특정 요소가 있는지 판별
  - findIndex: indexOf처럼 배열에서 찾으려는 요소의 인덱스 번호를 찾아 반환
  - find:findIndex처럼 인수로 판별 함수를 전달하고, 배열에서 이를 만족하는 요소를 찾음
### 변형 메서드
 - map: 배열 각각의 요소에 대한 함수 호출 결과를 모아 새 배열을 만들어 반환하는 메서드
 - sort: 배열의 요소를 정렬할 때 사용하는 메서드
 - join: 메서드는 배열 요소를 모두 연결해 하나의 문자열로 반환
 - reduce:배열 요소를 모두 순회하면서 인수로 제공한 함수를 실행
  ## 9.비동기 처리
  ### 동기와 비동기
   - 동기 :순차적으로 코드를 실행하는 것
   -  동기는 앞의 작업을 완료해야 다음 작업을 실행할 수 있음
   -  비동기:특정 작업을 다른 작업과 관계없이 독립적으로 동작하게 만드는 것
   - setTimeout:비동기적으로 동작하는 함수
   - 비동기 작업은 동기 작업과는 달리 작업의 실행 순서와 완료 순서가 일치하지 않음
  ## 콜백 함수로 비동기 처리하기
  - 콜백 함수를 이용하면 비동기 작업의 결괏값을 사용할 수 있음
### 프로미스 객체를 이용해 비동기 처리하기
- 프로미스(Promise)는 비동기 처리를 목적으로 제공되는 자바스크립트 내장 객체
- 대기(Pending) 상태: 작업을 아직 완료하지 않음 
- 성공(Fulfilled) 상태: 작업을 성공적으로 완료함 
- 실패(Rejected) 상태: 작업이 모종의 이유로 실패함