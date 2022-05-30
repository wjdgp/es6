// ES5
function myFunc1(name) {
  return '안녕' + name;
}

console.log(myFunc1('영희'));
// 출력 => 안녕 영희

// ES6
const myFunc2 = (name) => {
  return `안녕 ${name}`;
}

console.log(myFunc2('영희')); // 출력 => 안녕 영희

// 또는 화살표를 사용하거나 'return' 키워드를 사용하지 않아도 된다.
const myFunc3 = (name) => `안녕 ${name}`;

console.log(myFunc3('영희'));