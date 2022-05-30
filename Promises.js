import fetch from "node-fetch";

// ES6
// API에서 데이터를 가져오거나 실행하는데 시간이 걸리는 함수를 가지고 있을 댸 사용가능

// const myPromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve('안녕하세요 Promise가 성공적으로 실행했습니다.');
//   });
// };

// console.log(myPromise());
// Promise { '안녕하세요 Promise가 성공적으로 실행했습니다.' }

// fetch 함수
const url = 'https://jsonplaceholder.typicode.com/posts';
const getData = (url) => {
  return fetch(url);
};

getData(url).then(data => data.json()).then(result => console.log(result));
// 데이터 배열이 반환된다.