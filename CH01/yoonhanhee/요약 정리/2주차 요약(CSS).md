CSS 강의 요약

-html 정리
<!--,--> 안의 코드는 무시(html)
/*~*/ css 주석
<div>,</div> 아무 의미 없는 디자인 tag (block level element)
<span>,</span> 아무 의미 없는 디자인 tag (inline element)
<table>,</table>
	<tr>,</tr> 행
		<th>,</th> 열 제목
		<td>,</td> 열 내용

-css문법
a{
		color:red;
	}

+a 선택자(selector) 효과를 부여받는 대상
+color:red; 선언(declaration) 어떤 효과
+color 속성(property)
+red 속성 값(property value)
++ 선택자는 , 로 다른거랑 같이 사용가능
++속성값은 띄어 쓰기로 속성 같이 사용가능

-css 넣는법
1.<style>,</style> html style tag 안에 넣기
+css가 어디까지 인지 표시
(<style>,</style>사이는 css의 문법으로 읽어라)
+<style>
	a{
		color:red;
	}
</style>

2.<a style="color:red"> tag안에 style속성으로 css효과 넣기(직접적)
+style="color:red;text-decoration:underline"
+css가 어디까지(무엇) 인지 표시
+style="" html의 속성 
(""안에는 반드시 css효과 넣기, 효과는 style 속성이 위치한tag에 적용)
+color:red 속성 값(css효과)

-속성(css property)/효과
1. color:~; ~색
2. text-decoration: ~; ~를 글자에 효과로 준다
3. font-size:~; 글자 크기를 ~로
4. text-align:~; 글자를 ~로 정렬
5. border-width:~; 테두리 ~두께
6. border-color:~; 테두리 ~색
7. border-style:~; 테두리 ~스타일(점,선..)
+border:~ ~ ~; 같은 속성은 값을 띄어쓰기로 연달아 붙여 쓰기로 같이 사용
8. display:inline; 자신의 부피만큼 크기를 가짐
9. display:block; 화면 전체를 크기로 가짐
+block level element   화면 전체를 크기로 가짐(ex. 제목 tag)
+inline element 자신의 부피만큼 크기를 가짐(ex. 일반 tag)
10. display:none; 태그 화면에 안보이게
11. padding:~; 컨텐츠와 테두리 사이에 ~만큼 여백주기
12. margin:~; ~만큼의 간격
+[{(content) padding} border] magin
13. width:~; ~크기의 폭(content width)
14. height:~; ~크기의 높이(content height)
15. border-bottom:~; 아래쪽만 
+border-bottom:1px solid gray; 테두리 아랫선만 1픽셀 직선 회색으로
16. grid
+#윤{
	display:grid;
	grid-template-columns: 150px 1fr;
}
++columns 열 /rows 행 /fr 남은공간 자유

<div id="윤">
	<div> 한</div>
	<div> 희</div>
</div>
++태그들을 부모태그로 묶기->부모태그에 id
++#윤 div{} Id값 윤인 태그 아래에 div가 선택자
17. @media(max-width:~px) 화면 넓이 최대 ~px =screen width < ~px
18. @media(min-width:~px) 화면 넓이 최소 ~px =screen width >~px
+@media(max-width:800px) {
	div{
		display:none;
		}
	}

-선택자(css selector)
1. p (tag)
+<p>
+element=tag
2. class="~" (html 속성)
+ .~ 
+<p  class="~">
+(속성 값 여러개 가능, 띄어쓰기로 구분<-안좋음 순서 문제)
3. id="~" (html 속성)
+#~
+<p  id="~">
+id의값은 한번만 사용
+#~{
		color:red;
	}
<p  id="~">
=id값이~인 태그를 선택한다

범위
p(포괄적)->class->id(구체적)
우선순위
ld->class->p
=모든 <p>태그를 가리키는 선택자 보다 id의 값이 ~인 태그만을 가리키는 선택자가 우선순위가 높다
