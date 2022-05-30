const myFunc1 = (name, age) => {
  return `안녕 ${name} 너의 나이는 ${age}살 이니?`;
}

console.log(myFunc1('영희'));
// 출력 => 안녕 영희 너의 나이는 undefined살 이니?

// 기본 매개 변수 사용한 예시
// 정의되지 않은 매개 변수가 반환되지 않고
// 매개 변수 할당을 잊어버렸을 때 해당 값이 사용된다.
const myFunc2 = (name, age = 22) => {
  return `안녕 ${name} 너의 나이는 ${age}살 이니?`;
}

console.log(myFunc2('철수'));
// 출력 => 안녕 철수 너의 나이는 22살 이니?