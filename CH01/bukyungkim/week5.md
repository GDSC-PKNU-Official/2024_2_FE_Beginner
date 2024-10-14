# 자바스크립트 실전
- 자바스크립트를 통해 사용자와의 상호작용이 가능하도록 하기
## script 태그
- html로 자바스크립트를 시작한다고 표현함
- document.write('1+1'); 작성: 값이 2로 나옴
- 자바스크립트는 html과 달리 동적으로 작동
## 버튼 만들기
### <input type="button" value="hi"onclick="alert('hi')">
- 버튼을 만들 떄 input type 사용
- 텍스트를 넣고 싶을 떄 value 사용
- 경고창을 넣고 싶을 떄 onclick = alert 사용
- event가 일어났다고 표현함
- <input type="text"> 텍스트 입력 가능
### <input type="text" onchange="alert('change')">
- 텍스트 입력 시 내용 밖으로 마우스가 빠져나올 떄 경고창 뜸
### <input type="text" onkeydown="alert('key down!')"
-키를 입력할 떄 경고창 뜸
## console
- 검사하기를 들어가서 console에서 자바스크립트를 입력 가능
## 데이터 타입-문자열과 숫자
### 산술 연산자
- '+','-', '/','*' 사용
### 텍스트 연산
- 작은 따옴표로 끝내면 됨
- 텍스트 연산에 .lenghth 사용하면 텍스트의 길이를 알려줌
- 'hellow world;.toUpperCase() :문자를 대문자로 변경해줌
- 'hellow world;.indexOf('o') :알파벳 문자의 위치를 알려줌
- > 문자열인지 숫자열인지에 따라서 결과값이 달라짐
### 변수와 대입 연산자
- 변수:var name =' egoing'; alert("텍스트"+"name+")
- > 텍스트에 입력한 모든 +"name"+가 egoing으로 변함
### 웹 브라우저 제어
- css에 대해 알기
- 속성을 주고자하는 태그가 누구인지를 알기
### 제어할 태그 선택하기

- document.querySelector('body').style.backgroundColor = 'black'; :백그라운드 컬러는 검은색
-  document.querySelector('body').style.color = 'white'; :모든 스타일 색상은 하얀색
=======
- selector :(". myclass")
- 
- 
 

