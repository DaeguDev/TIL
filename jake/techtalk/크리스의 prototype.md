## 주제 작성
- Javascript/prototype

## Introduction

1. 키워드: prototype, 상속, 클래스, 연결, 객체 내용 복사, 자바스크립트 

## Body

## Class and function in Javascript

- class: Javascript는 class 키워드가 존재하나, 다른 객체지향 언어와 달리 이는 function을 재정의한 것으로 이해할 수 있으며 프로토타입에 기반한다.

> [Javascript's class definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes): Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics. 

> defining classes: Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

```js
// class
class Dog {
    name = "navi"
    sound = "bark"
    
    makeSound(){ console.log(this.sound) }
}

const myDog = new Dog()
myDog.makeSound() // bark

// function
function Dog() {
    this.name = "navi"
    this.sound = "bark"
    this.makeSound = function() {
        console.log(this.sound) 
    }
}

const myDog = new Dog()
myDog.makeSound() // bark
```

- function와 new 키워드로 객체를 생성할 경우 1) 빈 객체가 생성되며 2) 생성된 빈 객체가 this에 바인딩 된 후 3) this 객체의 속성을 채우는 동작이 수행된다.


## Proto and Prototype chaining

- __proto__ 속성:자바스크립트의 모든 객체는 __proto__속성을 가짐. 객체와 객체를 연결하는 링크
- prototype chaining: 해당 객체의 __proto__객체를 따라 탐색함. 프로토타입 체이닝을 통해 연결된 객체의 메소드나 속성을 가질 수 있게됨.

```js
const dog = { 
    name: "navi"
}

const cat = {
    sound: "meow"
}

dog.__proto__ = cat

console.log(dog.sound) // "meow"
```

프로토타입 사용시 객체와 객체를 연결시킬 수 있으므로 함수 실행시 매번 객체를 생성하지 않고도 재활용할 수 있는 메모리상의 이점이 생긴다. 

```js
function hello() { 
    this.message = function() { console.log("hi") }
}

const withoutPrototype = new hello()
withoutPrototype.message() // 함수 실행시 매번 객체 생성

function helloPrototype() {}
helloPrototype.prototype.hello = hello

const check = new helloPrototype()
check.hello() // message 메소드 실행
```

## 사진, 도표 첨부(필요시)

## TIL 챌린지 날짜 기록

- [x] 챌린지 진행: 2022.04.19

## TIL 모티브 설명
우아한 테크 코스에서 진행되는 10분 테코톡 강의 수강 후 TIL 형식 정리

## 테코톡이란? 
> 🙋‍♀️ 우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. 🙋‍♂️ '10분 테코톡'이란  우아한테크코스 과정을 진행하며 크루(수강생)들이 동료들과 학습한 내용을 공유하고 이야기하는 시간입니다. 서로가 성장하기 위해 지식을 나누고 대화하며 생각해보는 시간으로 자기 주도적인 성장을 지향하는 우아한테크코스의 문화 중 하나입니다.

> 🌕우아한테크코스란 🌕 우아한테크코스는 일반 사용자용 서비스를 개발하는 회사가 필요로 하는 역량을 가진 프로그래머를 양성하기 위한 교육입니다. 우리의 목표는 자기 주도적으로 학습하고 성장하고 싶은 개발자를 위한 교육을 만드는 것입니다.
