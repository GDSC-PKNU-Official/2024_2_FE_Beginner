# HTML강의 요약

파일이름.html 생성

###  문법 tag <>,</>
1. <strong>,</strong> 글자 두껍게 
2. <u>,</u> 밑줄
3. <h1>,</h1> 제목(heading) h1~h6/큼~작음
4. <br> 줄바꿈
5. <p>,</p> 단락 
+ style <태그이름 style="속성이름:속성값">
6. <img> 이미지 
+ <img src(source)="이미지 주소">
+ <img width(너비)="~%,~">
7. <li>,</li> 목차 (list)
8. <ul>,</ul> 목차, 간격 (unordered list)
9. <ol>,</ol> 순서대로 정렬 (ordered list)
+ 관계 ol=ul>li
+<ul>
	<li> 1.~</li>
	<li> 2.~</il>
 </ul>
+<ol>
	<li>~</li>
	<li>~</il>
 </ol>
10. <title>,</title> 웹페이지 제목
11. <meta> 웹페이지 데이터에 관한 데이터
+<meta charset(문자)="utf-8">
12. <head>,</head> 본문,body를 설명하는tag (웹상에 보이지 않음)
13. <body>,</body> 본문tag (웹상에 보여짐)
14. <html>,</html> head와 body를 감싸는 최고위 tag
15. <!doctype html> <html>위에 사용되며 이 문서가 html인것을 나타냄
+ <!doctype html>
   <html>
   <head>
	<title></title>
	<meta charset(문자)="utf-8">
   </head>
   <body>
  <ol>
	<li>~</li>
	<li>~</il>
   </ol>
   </body>
   </html>
16. <a>,</a> hyper text,링크(anchor) 
+href (hyper reference)="링크주소" 리소스의 URL지정
+target="_blank" 새창으로 열기
+title="~" ~라고 링크를 열기전 미리 툴팁으로 알려줌
+<a href(hyper reference)="링크주소" target="_blank" title="~">,</a>
+<a href="~.html">,</a> ~파일로 이동 링크
