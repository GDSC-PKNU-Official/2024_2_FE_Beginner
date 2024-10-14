JS 실전

<script>,</script> 자바스크립트언어로 읽음
alert() 경고창


-event
onclick=""
onchange=""
onkeydown=""

-자료형
+원시 자료형
Null 값없음(의도적X)		
Undefined 값없음(의도적X자동ㅇ로 할당)
Boolean 참거짓	
Number 숫자형	
BigInt Number보다 더 큰 정수 표현가능 (숫자n)
String 문자형
Symbol 고유한 속성키(변경불가)
+객체

-propertise 프로퍼티
.length 갯수,길이
.toUpperCase() 대문자로
.indexOf() 값 찾기

-네비게이션
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'gray'; 
  });
  link.addEventListener('mouseout', () => {
    link.style.color = 'black'; 
  });
});

-밤낮 모드
<input type="button" value="NIGHT" onclick="NightMode()">
<input type="button" value="DAY" onclick="DayMode()">

function NightMode() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  links.forEach(link => {
    link.style.color = 'white';  
  });
}
function DayMode() {
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  links.forEach(link => {
    link.style.color = 'black';  
  });
}

-이미지 슬라이드
<img class="슬라이드" src="../사진자료/햄찌.jpg" alt="햄찌" width="50%">
<img class="슬라이드" src="../사진자료/선글라스 햄찌.jpg" alt="선글라스 햄찌" width="50%">
<img class="슬라이드" src="../사진자료/안경 햄찌.jpg" alt="안경 햄찌" width="50%"> 

let slideIndex = 0; 

function showSlides() {
  const slides = document.querySelectorAll('.슬라이드'); 
  slides.forEach(slide => slide.style.display = 'none'); 
  slideIndex++; 
  if (slideIndex > slides.length) slideIndex = 1; 
  slides[slideIndex - 1].style.display = 'block'; 
  setTimeout(showSlides, 2000);
}
showSlides(); 

-목록
<div class="accordion">
   <div class="accordion-header" onclick="toggleAccordion(this)">목록▽</div>
	<ol class="accordion-content">
		<li><a href="sub1-기본정보.html">기본정보</a></li>
		<li><a href="sub2-인사말.html">인사말</a></li>
		<li><a href="sub3-퀴즈.html">퀴즈</a></li>
	</ol>
</div>

function toggleAccordion(header) {
  const content = header.nextElementSibling; 
  const isVisible = content.style.display === 'block'; 
  content.style.display = isVisible ? 'none' : 'block'; 
}

-환영 알람
 window.onload = function() {
      alert("윤한희의 웹사이트에 오신 것을 환영합니다!");
    };