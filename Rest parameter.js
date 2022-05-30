const arr = ['영희', 20, '열성적인 자바스크립트', '안녕', '지수', '어떻게 지내니?'];

// 비구조화를 이용한 값을 얻기
const [val1, val2, val3, ...rest] = arr;

const Func = (restOfArr) => {
  return restOfArr.filter((item) => {return item}).join(" ");
};

console.log(Func(rest)); // 안녕 지수 어떻게 지내니?