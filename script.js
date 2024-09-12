const btnReset = document.querySelectorAll("button")[0];
const btnActive = document.querySelectorAll("button")[1];

console.log(btnReset);
console.log(btnActive);

const box = document.querySelector("#box");

/*
DomEl.classList.add('클래스명') 요소에 해당 클래스명 추가
DomEl.classList.remove('클래스명') 요소에 해당 클래스명 제거
DomEl.classList.remove() 요소에 있는 모든 클래스명 제거
DomEl.classList.toggle('클래스명') 해당 클래스명이 있으면 제거하고 없으면 추가
DomEl.classList.contains('클래스명') 해당 클래스명이 있으면 true반환 없으면 false반환
*/

btnActive.addEventListener("click", () => {
	box.classList.add("on");
});
btnReset.addEventListener("click", () => {
	box.classList.remove("on");
});
