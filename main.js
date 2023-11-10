/*
  1. DOM (Document Object Model): Web Api
    - 브라우저가 HTML태그를 해석해서 랜더링할 때 자바스크립트로 하여금 제어할 수 있도록 객체형태로 만들어주는 API (Application Programing Interface)
  --------------------
  2. 자바스크립트의 style 제어
    - 자바스크립트는 HTML, js 파일 외에는 접근 권한이 없음
    - 따라서 style변경시 css파일이 변경되는 것이 아니라 HTML요소에 인라인 형태로 style을 강제로 꽂아넣어서 스타일 덮어쓰기
*/

/*
  // DOM 탐색
  const section = document.querySelector('section');
  const articles = section.querySelectorAll('article');
  const btn = section.querySelector('.btn');
  const childrenEl = section.children;
  const parentEl = btn.parentElement;
  const parentEl2 = btn.parentElement.parentElement;
  const grandParentEl = btn.closest('section');
  const prevEl = btn.previousElementSibling;
  const nextEl = btn.nextElementSibling;
  const siblings = btn.parentElement.children;
  console.log(section);
  console.log(articles[0]);
  console.log(btn);
  console.log(childrenEl[2]);
  console.log(parentEl);
  console.log(parentEl2);
  console.log(grandParentEl);
  console.log(prevEl);
  console.log(nextEl);
  console.log(siblings);
*/

// DOM 이벤트 연결
const btns = document.querySelectorAll('.list1 li');
const box = document.querySelector('.box');
//console.dir(btns[0]);
/*
  btns[0].onclick = () => {
    console.log('button1');
  };
*/
console.dir(box);
btns[0].addEventListener('click', () => {
	box.style.backgroundColor = 'pink';
	box.style.width = '100px';
	box.style.marginLeft = '150px';
	console.dir(box);
});
// js로 기존 스타일을 동적으로 덮어쓰는 것이 아닌
// 기존의 스타일값을 css로 가져오는 것은 불가능 (js는 css 접근 불가)
// js는 역으로 화면에 출력되고있는 결과물을 다시 수치로 재계산해서 가져옴
btns[2].addEventListener('click', () => {
	console.log(getComputedStyle(box).backgroundColor);
});
// forEach 활용
btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		console.log(`button${index + 1}`);
		//console.log(btn.innerHTML);
	});
});
