// ES5
function myFunc1(name, age) {
  return '안녕' + name + '너의 나이는' + age + '살 이다.';
}

console.log(myFunc1('영희', 22));
// 출력 => 안녕 영희 너의 나이는 22살 이다.

// ES6
const myFunc2 = (name, age) => {
  return `안녕 ${name}, 너의 나이는 ${age}살 이다.`;
}

console.log(myFunc2('철수', 23));
// 출력 => 안녕 철수, 너의 나이는 23살 이다.