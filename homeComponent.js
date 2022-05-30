// ES6
// 가져오기

import detail from "./detailComponent.js";

console.log(detail('영희', 23));
// 출력 => 안녕 영희, 너의 나이는 23살 이다.

// 둘 이상의 모듈을 가져오는 경우
import {detail, userProfile, getPosts} from "./detailComponent.js";

console.log(detail('영희', 23));
console.log(userProfile);
console.log(getPosts);