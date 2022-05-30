class myClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`안녕 ${this.name} 너의 나이는 ${this.age}살이다.`);
  }
}

// myClass 메서드 및 속성 상속
class UserProfile extends myClass {
  userName() {
    console.log(this.name);
  }
}

const profile = new UserProfile('영희', 23);

profile.sayHello(); // 안녕 영희 너의 나이는 23살이다.
profile.userName(); // 영희