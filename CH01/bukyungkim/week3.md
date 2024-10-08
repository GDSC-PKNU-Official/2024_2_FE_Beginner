
## 2. 변수와 상수
 ### 변수: 프로그램을 실행하는 과정에서 변경될 수 있는 값을 저장하는 저장소
- 자바스크립트 변수를 만들 떄 키워드는 let age =25;:age는 25와 같다는 뜻
- 변수를 초기화한다는 뜻을 가지고 있다
- **//표시:주석을 뜻하는 표현으로 개발자가 설명을 달아 놓은 문자프로그램에서 코드로 해석하지도 실행하지 않아도 되는 문자
- 변수는 이름으로 구분하기 때문에 let으로 변수를 선언할 때는 이름을 중복해서 사용할 수 없다.(다시 공부하기)
- var은 변수선언은 let과 달리 이름을 중복해 선언해도 실행할 수 있다.혼란을 애가하고 코드의 복잡도를 높이기 떄문에 그굽적 변수 선언 키워드로는 let을 사용한다.
 ### 상수: 이름을 가진 저장 공간 
  - 변수와 다른점: 프로그램 실행과정에서 값을 변경할 수 없다, 상수는 선언과 동시에 값을 할당하는 과졍이 필요
  - const라는 키워드를 붙여 선언한다.
  - 상수와 공통점:이름을 가진다,이름을 정하는 행위를 변수의 네이밍이라고 한다
  #### 명명 규칙
  - 기호 사용 규칙:한글을 포함해 문자,숫자 그리고 특수 기호의 일부를 사용할 수있다( 특수기호는 _와 $만 허용)
     - '_': 변수 이름이 두 단어 이상으로 이루어진 합성어일 떄 가독성을 높이기 위해 사용
     - '$': JQuery를 사용할 때처럼 이 변수가 별도의 라이브러리 객체 라는 것을 가리킬 때 사용
  #### 숫자 사용 규칙
   - 변수의 이름을 숫자로 사용해서 시작하면 안된다.
   - 변수의 이름을 중간이나 뒤에 배치하는게 좋다
  #### 예약어 규칙
   - (진짜 무슨말이지)
  #### 대소 문자 구별
   -변수 a,b,c가 무슨 의미인지 파악할 수 있도록 이름을 지어야 한다.
  ##### *변수명 표기법
    1. 카멜 표기법
    - 모든 단어의 첫글자를 대문자로 표기하는 방법인데, 변수 이름이 마치 낙타의 등처럼 굽은 모습을 연상시킨다고함
    - 어러 단어가 합쳐진 합성어를 사용해 이름을 지으면 가독성이 떨어진다
    2. 파스칼 표기법
    - 모든 단어의 첫글자를 대문자로 표기하는 방법
    3. 스네이크 표기법
    -특수 기호_를 활용하는 표기법. 단어 사이에 활용한다.
## 3. 자료형
 ### 자료형과 원시 자료형
  - 값을 성질에 따라 분류한 것
  - ex) 안녕이라는 값은 문자열 등 값을 그 성질에 따라 분류한 것
  - 크게 원시 자료형과 객체 자료형으로 나누고, 작게 8개의 세부 자료형으로 나눈다.
  - 원시 자료형:한번에 단 하나의 값만 가질 수 있는 타입
     - ex)  let age = 25, 30; // 문법 오류
 ### 숫자형
  - 수의 종류를 구분하지 않는다.
  - 자바스크립트 숫자형은 덧셈, 뺄셈, 곱셈, 나눗셈의 사칙연산을 수행한다.
  - *모듈러 연산이라고 하여 % 기호를 이용해 나머지를 구한다.
  - *infinity 무한대를 의미하는 값으로 최솟값,최댓값을 구할 때 주로 사용한다.
  - *NaN :표현이 불가능한 숫자형의 결과를 표현할 때 사용하는 값
 ### 문자형
  - 문자열을 포함하는 자료형
  - 문자형이라는 것을 알리기 위해서는 이 코드처럼 큰따옴표 또는 작은 따옴표로 감싸야한다
  - 백틱으로도 문자형을 만들 수 있다, '`'값이 변하는 동적인 문자열을 생성할 때 유용하다.
 ### 볼리언
  - 참 또는 거짓을 저장하는 자료형
  - 어떤 값이 있는지 등을 확인할 떄 유용하게 사용
## 4. 형 변환
  - 어떤 값의 자료형을 다른 자료형으로 변환하는 것을 '형 뱐환' 이라고 한다.
 ### 묵시적 형 변환
  - 자바스크립트 엔진이 스스로 알아서 변환하는 작업
 ### 명시적 형 변환
  - 묵시적 형 변환과 반대로 내장 함수 등을 이용해 프로그래머가 의도적으로 어떤 자료형을 다른 자료형으로 변경하는 작업
  - *내장 함수: 대다수 프로그래밍 언어는 프로그래밍에서 자주 사용하는 기능을 모아 함수 형태로 제공
  #### 숫자형으로 변환
   - (다시 공부하기)
   - 문자열을 숫자로 변환하고 싶다면 ,함수 parseIntf를 사용
 ## 5. 연산자
  - 프로그래밍 언어에서 다양한 연산을 수향할 때 도움을 주는 기호와 문자
  - 다양한 연산을 수행할 수 있는 다양한 연산자를 제공
  ### 대입 연산자
   - 가장 기본이 되는 연산자로서 변수에 값을 할당하는 역할
   - *결합 방향이란?
  ### 산술 연산자
   - 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지 연산(%)처럼 프로그래밍에 필요한 가장 기본적인 계산 기능을 수행하는 연산자
  ### 복합 대입 연산
   - 복합 대입 연산자는 대입 연산자와 산술 연산자의 기능을 함께 이용할 때 사용
   - 산술 연산자는 곱셈, 나눗셈, 나머지 연산자가 덧셈, 뺄셈 연산자보다 우선순위
 ### 증감 연산자
   - 덧셈 또는 뻴셈 연산자를 두 개 연달아 붙여 사용
   - 변수 뒤에 증감 연산자를 두는 것을 '후위 연산'이라고 하며 연산의 결과는 다음 행부터 적용된다.
 ### 논리 연산자
   - 참 거짓을 포함하는 볼리언 값을 다룰 때 사용하는 연산자
   -  OR: 둘 증 하나라도 참이면 참 = 원화 키 사용
   -  AND :둘 중 하나라도 거짓이면 거짓=&& 사용
   -  NOT :참이면 거짓, 거짓이면 참= ! 사용
  ### 비교 연산자
   - 두 값을 비교하는 연산자
   -  ===: 같다
   -  !==: 같지 않다
   -  >  :크다
   -  >= :크거나 같다
   -  <  :작다
   -  <= :작거나 같다
 ### null 병합 연산자
   - 값이 확정된 변수를 찾을 때 사용하는 연산자
 ### 동적 타이핑과 typeof 연산자 
   - 저장하는 변숫값에 따라 변수의 자료형도 함께 변경되는 특징을 동적 타이피이라고 한다
   - 문제점:변수의 자료형이 변경되었다는 사실을 모르고 코드를 작성한다면 프로그렘이 의도치 않게 동작하거나 오류가 발생할 수 있다
   -해결방법: 변수 varA의 자료형이 무엇인지 확인할 필요가 있다.
 ### 삼항 조건 연산자 
   - 삼항 연산자는 ? 앞에 조건식을 작성하고, 콜론 :을 기준으로 앞은 조건식이 참일 때 그리고 뒤는 조건식이 거짓일 때 수항할 명령을 작성
## 6. 조건문
  - 특정 조건을 만족할 때 동작하는 프로그래밍의 기본 문법 중 하나
 ### if문
   - 만약 A라면 B를 하고, 그렇지 않으면 C를 하라”
   - () 조건식 입력
   - {} 해당 조건식이 참일 떄 수행할 명령 입력
   - else: 조건식과 일치하지 않을 때 수항할 코드로 작성하고 싶을 때 사용
   - else if : 조건식이 참이면 이 문에 있는 명령을 수행한다.
 ### switch 문
   - 중첩 if문 처럼 비교할 조건이 많을 떄 사용하는 조건문
   - case 문과 비교해 정확히 일치할 때만 수행한다.
   - 장점: if문 보다 가독성있는 코드로 작성할 수 있다.
## 7.반복문
  -프로그래밍이 동일하거나 유사한 동작이 반복해서 나올 떄는 반복문을 사용
 ### 반복문의 유용성과 for문
   - for 문은 조건식과 일치하지 않을 때까지 반복하면서 중괄호에 있는 명령을 수행한다.
   - 반복문에 사용할 변수를 초기화하는 식
   - 조건식은 언제까지 반복할 것인지 정의하는 식
   - 증감식을 반복할 때마다 카운텨 변수를 증가 또는 감소하는 식
   - 반복 수행의 대상이 되는 명령은 반복할 때 마다 실행
 ### 반복문 강제 종료하기, 건너뛰기
   - break 문을 사용하면 조건식에서 정의한 반복문의 중료 조건과 상관없이 반복을 강제 종료할 수 있다.
   - continue 문은 반복을 멈추는 대신 다음 반복과정으로 건너뛴다.
## 8. 함수
   - 공통으로 사용하는 유사 코드를 하나로 묶어 '함수'라는 이름으로 사용
 ### 함수 선언
   - 이름이 붙은 명령들의 모음
   - function이라는 키워드를 사용해 함수를 만든다.
 ### 함수 호출
   - 미리 선언해 두었던 함수를 실행한다.
   - 함수를 선언할 때 중괄호에 작성했던 명령을 실행한다.
   - getarea라는 함수는 값을 구한 다음에 콘솔에 출력한다.
 ### 함수의 인수와 매개변수
   - 인수는 함수를 호출하면서 넘겨주는 값이고 매겨변수는 함수에서 념겨받은 인수를 저장하는 변수이다
 ### 함수 반환
   - return 문을 만나면 함수는 종료된다는 사실
 ### 중첩 함수
   - 특정 내부에서 선언된 함수
 ### 콜백 함수
   - 다른 함수의 인스로더 잔달할 수 있다.
   - 함수가 동일한 기능을 갖더라도 특정 부분이 달라 새 함수를 만들게 되면 중복코드가 발생하는데 이때 문제를 해결하는데 도움을 준다. 
 ### 화살표 함수
   - 익명 함수를 매우 간결하게 작성할 때 사용하는 함수 표현식의 단축 문법
 ## 9. 스코프
   - 변수와 함수는 생성과 동시에 자신에게 접근하거나 호출할 때 일정한 제약 범위를 갖는데 으를 스코프라고 한다.
### 전역, 지역 스코프
   - 전역 스코프: 해당 변수를 코드 어디에서나 접근할 수 있다는 의미
   - 지역 스코프: 특정 영역에서만 해당 변수를 접근할 수 있다는 의미
### 블록, 함수 스코프
   - 변수나 함수는 중괄호로 둘러싸인 부분을 뜻하는 블록을 기준으로지역 스코프가 결정된다.
   - var 키워드로 선언한 변수는 블록 스코프를 갖는 let이나 cost 키워드와 달리 함수 스코프를 갖는다.
   - var 프로그래머는 혼란에 빠뜨릴 여지가 많기 때문에 추천하지 않는다.
## 10.객체
  - 다양한 값을 담는 자료형
 ### 객체 생성과 프로퍼티 
   - 리터럴 또는 상성자 문법 사용
   - 데이터가 있는 객체를 생성하고 싶을 때는 key, value가 쌍으로 이루어진 프로퍼 작성
   - 하나의 key가 하나의 프로퍼티에 해당하기 때문에, 보통 key 이름으로 프로퍼티를 구별
 ### 객체 프로퍼티 다루기 
  #### 프로퍼티 접근
   - key를 이용하여 객체의 프로퍼티에 접근
  #### 프로퍼티 추가
   - 점 표기법과 괄호 표기법을 이용해 새로운 프로퍼티 추가
  #### 프로퍼티 수정
   - value 수정할 때에도 점 표기법이나 괄호 표기법을 이용
 ### 상수 객체의 프로펴티
   - 상수로 만든 객체도 객체 자체를 없애지 않는 한, 프로퍼티를 자유롭게 추가하거나 삭체,수정할 수 있다.
 ### in 연산자
   - 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.
 ### 매서드
   - 매서드는 데이터가 아니라 객체의 동작을 정의한다.
 ## 11. 배열
   - 순서가 있는 요쇼의 집합이자 여려 개의 항목을 담는 리스트
  ### 배열 선언
   -자바스크립트에서는 두 가지 방법을 빈 배열 생성
   - 1. 배열 리터럴 :문법이 간결함, 배열을 생성하면서도 값도 할당하고 싶다면 대괄호 안에서 콤마로 값을 구분해 입력하면 된다.
     2. 배열은 다른 배열은 물론 객체나 함수 등도 모두 저장한다.
  ### 배열 인덱스
    - 배열과 객체 둘 다 여려 데이터를 저장할 수 있고 저장할 데이터의 지료형에도 아무런 제약이 없다 .
    - 인덱스란 배열의요소의 위치를 0부터 시작하는 숫자로 순서대로 표현한 것
    인덱스를 이용하면서 배열 요소를 수정 또는 추가할 수 있다.
