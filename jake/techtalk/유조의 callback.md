## 주제 작성

- Javascript/callback의 이해

## Introduction

1. 정의
> callback: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

> **promise**: The Promise object represents the eventual completion (or failure) of **an asynchronous operation and its resulting value**. A Promise is a proxy for a value not necessarily known when the promise is created. 

1. 키워드: 동기, 비동기, promise, callback, async/await, callback hell, 

## Body

- 동기: 특정 코드를 수행 완료한 후 다음 코드를 실행(blocking)

```js
// 실행 결과: 1, 2, 3
console.log(1)
console.log(2)
console.log(3)
```

- 비동기: 특정 코드를 수행 중 다음 코드를 실행(non-blocking), callback으로 구현.

```js
// 실행 결과: 1, 3, 2
console.log(1)
setTimeout(() => { console.log(2) }, 1000) // callback
console.log(3)
```

- callback: call(호출) + back(다시 되돌아옴) => 동기 콜백, 비동기 콜백 모두 사용 가능함.

```js
const myArr = ['a', 'b', 'c']

// printMyArr: create a callback
const printMyArr = () => {
    console.log(myArr.shift())

    if (!myArr.length) clearInterval(timer) // reset setInterval
}

// timer has a execution control to callback function printMyArr
const timer = setInterval(printMyArr, 1000)
```

- Promise: 비동기 처리에 사용되는 객체. 특정 시점에는 알 수 없는 값을 Promise 객체로 표현하고, 일정 시간이 흐른 후 그 값을 특정하는 역할을 함. 주로 서버에서 데이터를 받아오고 이를 화면에 표시하는 경우 활용됨. resolve, reject 콜백 함수를 파라미터로 받음.

```js

const displayUser = (user) => {
    return new Promise((resolve, reject) => {
        if (user) resolve(user) // resolve: async success,
        else reject(new Error('no user found')) // reject: async failed
    })
```

> A Promise is in one of these states:

1. pending: initial state, neither fulfilled nor rejected.
1. fulfilled: meaning that the operation was completed successfully.
1. rejected: meaning that the operation failed.

- async: ES6에서 추가된 문법. 함수에 async 키워드를 붙여줄 경우 해당 코드 블락을 Promise 객체로 변환시킴. 
- await: async로 실행 중인 비동기 함수의 실행이 끝날 때까지 결과를 반환할 때까지 대기함. 

## 사진, 도표 첨부(필요시)

## TIL 챌린지 날짜 기록
- [x] 챌린지 진행: 2022.04.13

## TIL 모티브 설명
우아한 테크 코스에서 진행되는 10분 테코톡 강의 수강 후 TIL 형식 정리

## 테코톡이란? 
> 🙋‍♀️ 우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. 🙋‍♂️ '10분 테코톡'이란  우아한테크코스 과정을 진행하며 크루(수강생)들이 동료들과 학습한 내용을 공유하고 이야기하는 시간입니다. 서로가 성장하기 위해 지식을 나누고 대화하며 생각해보는 시간으로 자기 주도적인 성장을 지향하는 우아한테크코스의 문화 중 하나입니다.

> 🌕우아한테크코스란 🌕 우아한테크코스는 일반 사용자용 서비스를 개발하는 회사가 필요로 하는 역량을 가진 프로그래머를 양성하기 위한 교육입니다. 우리의 목표는 자기 주도적으로 학습하고 성장하고 싶은 개발자를 위한 교육을 만드는 것입니다.
