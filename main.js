/*
  DOM (Document Object Model): Web Api
  - 브라우저가 HTML태그를 해석해서 랜더링할 때 자바스크립트로 하여금 제어할 수 있도록 객체형태로 만들어주는 API (Application Programing Interface)
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
//console.dir(btns[0]);
/*
  btns[0].onclick = () => {
    console.log('button1');
  };
*/
btns[0].addEventListener('click', (e) => {
	//console.log(e.currentTarget);
});
btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		console.log(`button${index + 1}`);
		//console.log(btn.innerHTML);
	});
});
