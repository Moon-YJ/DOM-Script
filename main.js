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
