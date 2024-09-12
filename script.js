//배열 : 성격이 비슷한 여러개의 자료값들을 그룹화하기 위한 자료형
const colors = ["red", "green", "blue"];

//배열의 값을 뽑을때 - 배열명[순번] : 해당 순번의 배열 데이터 뽑아냄
console.log(colors[0]);

//const로 선언한 변수값은 담겨있는 값이 원시형 자료일때는 덮어쓰기 불가
//const로 선언한 변수값이 참조형자료(배열, 객체)기존의 값을 불러와서 변경은 가능
//const로 선언한 변수값이 참조형자료 변경은 가능하나 아예 새로운 값으로 바꾸는 건 불가능
colors[0] = "hotpink"; //기존값 변경 가능
console.log(colors);
// colors = [1, 2, 3]; //새로운값 덮어쓰기 불가능
console.log(colors);

//배열명.length 해당 배열의 개수
console.log(colors.length);
/*
for (let i = 0; i < 3; i++) {
	console.log(colors[i]);
}
*/
for (let i = 0; i < 3; i++) console.log(colors[i]);

//순수배열, 유사배열 모두 반복처리 가능 (반복되는 문서객체요소도 반복처리 가능)
colors.forEach((data, idx) => {
	console.log("data", data);
	console.log("idx", idx);
});

colors.map((data, idx) => {
	console.log("map-data", data);
	console.log("map-idx", idx);
});
