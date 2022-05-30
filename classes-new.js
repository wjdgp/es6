class myClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// new
const user = new myClass('영희', 22);

console.log(user.name); // 영희
console.log(user.age); // 22