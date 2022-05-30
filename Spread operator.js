const arr = ['영희', 20, '열성적인 자바스크립트', '안녕', '지수', '어떻게 지내니?'];

const Func = (...anArray) => {
  return anArray;
};

console.log(Func(arr));
// 출력 => [ [ '영희', 20, '열성적인 자바스크립트', '안녕', '지수', '어떻게 지내니?' ] ]