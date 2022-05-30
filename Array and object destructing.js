// ES5 문법
// const contacts = {
//   famillyName: '이',
//   name: '영희',
//   age: '22'
// }

// let famillyName = contacts.famillyName;
// let name = contacts.name;
// let age = contacts.age;

// console.log(famillyName);
// console.log(name);
// console.log(age);
// 출력
// 이
// 영희
// 22

// 각 변수에 각 값을 할당해야한다.

// ES6 문법
// const contacts2 = {
//   famillyName: '김',
//   name: '철수',
//   age: '5'
// }

// let {famillyName, name, age} = contacts2;

// console.log(famillyName);
// console.log(name);
// console.log(age);
// 출력
// 김
// 철수
// 5

// 객체의 속성을 얻기 위해 값을 중괄호 안에 넣는다.

// const contacts2 = {
//   famillyName: '김',
//   name: '철수',
//   age: '5'
// }

// let {famillyName, username, age} = contacts2;

// console.log(famillyName);
// console.log(username);
// console.log(age);
// 출력
// 김
// undefined
// 5

const contacts2 = {
  famillyName: '김',
  name: '철수',
  age: '5'
}

let {famillyName, name: ontherName, age} = contacts2;

// console.log(ontherName);
// 출력 => 영희

// ES6 문법 배열
const arr = ['광희', '지수', '영철', 20];

let [value1, value2, value3] = arr;

console.log(value1);
console.log(value2);
console.log(value3);
// 출력
// 광희
// 지수
// 영철