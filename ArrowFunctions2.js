// ES5
const myArrary = ['진수', '영철', '영희', 5];

let arr1 = myArrary.map(function(item) {
  return item;
});

console.log(arr1); // 출력 => (4) ['진수', '영철', '영희', 5]

// ES6
let arr2 = myArrary.map((item) =>  item);

console.log(arr2); // 출력 => (4) ['진수', '영철', '영희', 5]