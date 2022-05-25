## 주제 작성

- Web/HTTP와 HTTPS

## Introduction

1. 키워드: HTTP, HTTPS, SSL, TLS, SSL 통신 과정 

## Body

## HTTP

Hypertext transfer protocol. 이종 시스템들의 상호 커뮤니케이션을 가능하게 해주는 프로토콜. 서버에서 브라우저로 데이터를 전송하는 용도로 가장 많이 사용함. 전송되는 정보가 암호화되지 않는다는 문제점을 가지고 있음. **전송되는 데이터는 원본 그 자체임.**

## HTTPS

Hypertext transfer protocol secure. 기존 HTTP에 SSL(보안 소켓 계층)을 추가한 프로토콜. 암호화를 통해 서버-브라우저간 안전하게 정보(유저 비밀번호 등)를 전달하고 도난을 예방할 수 있도록 개선. **전송되는 데이터는 암호화 되어 있음. **.

HTTP 웹사이트와 달리 HTTPS 웹사이트는 SEO 등 검색엔진 관련 부분에서 선호된다. e.g: 구글 검색엔진은 HTTPS 사이트를 HTTP 사이트보다 우선함. 또한 **AMP 사용시 HTTPS 사용해야만 함. 

<details>
<summary>AMP: Accelerated Mobile Pages</summary>

> AMP (originally an acronym for Accelerated Mobile Pages[1]) is an open source HTML framework developed by the AMP Open Source Project.[2] It was originally created by Google as a competitor to Facebook Instant Articles and Apple News.[3] AMP is optimized for mobile web browsing and intended to help webpages load faster.[4] AMP pages may be cached by a CDN, such as Microsoft Bing or Cloudflare's AMP caches, which allows pages to be served more quickly

- 자료 출처: https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages
</details>

## SSL: secure socket layer

Netscape 사에서 웹서버~웹 브라우저 간 보안을 위해 만든 프로토콜. 비대칭키(공개키/개인키)와 대칭키를 혼용해서 사용함.

1. 대칭키: 전송할 데이터의 암호화/복호화를 동일한 키로 진행함. 보안상 비대칭보다 덜 우수하나, 더 적은 비용을 요구함. 
1. 비대칭키: 전송할 데이터의 암/복호화를 서로 다른 키로 진행함. 보안상 대칭키보다 우수하나, 더 많은 비용을 요구함.

### SSL 통신 과정

SSL은 기존 대칭키 방식에 비대칭키 방식을 한번 더 wrapping하는 방식으로 보안성을 높임.

1. sender A ====(접속 요청)====> receiver B
1. sender A ====(B의 비대칭키 사용, B의 공개키 전송)====> receiver B
1. sender A ====(B의 공개키 사용, A의 대칭키 암호화 후 전송)====> receiver B
1. sender A ====(B의 대칭키 사용, 암호화된 A의 대칭키를 복호화)====> receiver B

이 통신과정은 유저-웹사이트 간에 적용되고, 유저-웹사이트-인증기관에도 동일하게 적용됨.
 
## 사진, 도표 첨부(필요시)

## TIL 챌린지 날짜 기록
- [x] 챌린지 진행: 2022.04.18

## TIL 모티브 설명
우아한 테크 코스에서 진행되는 10분 테코톡 강의 수강 후 TIL 형식 정리

## 테코톡이란? 
> 🙋‍♀️ 우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. 🙋‍♂️ '10분 테코톡'이란  우아한테크코스 과정을 진행하며 크루(수강생)들이 동료들과 학습한 내용을 공유하고 이야기하는 시간입니다. 서로가 성장하기 위해 지식을 나누고 대화하며 생각해보는 시간으로 자기 주도적인 성장을 지향하는 우아한테크코스의 문화 중 하나입니다.

> 🌕우아한테크코스란 🌕 우아한테크코스는 일반 사용자용 서비스를 개발하는 회사가 필요로 하는 역량을 가진 프로그래머를 양성하기 위한 교육입니다. 우리의 목표는 자기 주도적으로 학습하고 성장하고 싶은 개발자를 위한 교육을 만드는 것입니다.
