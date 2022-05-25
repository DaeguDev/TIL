## 주제 작성

- Database/MySQL 아키텍처

## Introduction

1. 키워드: 아키텍처, 클라이언트, MySQL 엔진, MySQL storage 엔진,   

## Body

## MySQL 아키텍처 구성

1. MySQL 접속 클라이언트(대부분의 언어를 지원함, shell도 지원함)
1. MySQL 엔진 Optimizer: 요청된 SQL문을 최적화하는 실행 계획을 구성함.
1. MySQL storage 엔진: 데이터를 디스크에 저장, 디스크에 저장된 데이터를 읽어오는 역할을 구성함. 플러그인 형태로 제공되므로 사용자 편의대로 선택 가능.
=> optimzer가 구성한 SQL 최적화를 storage 엔진이 실제로 시행함(이때 사용되는 API가 핸들러 API).
1. 운영체제, 하드웨어: 실제 테이블/로그 데이터를 파일로 저장함

### Optimizer

옵티마이저의 최적화 규칙은 아래와 같은 2가지로 나뉘어진다. 

1. 규칙 기반: 내장된 우선 순위에 따라 실행 계획 수립
1. 비용 기반: 작업 비용과 대상 테이블 통계 정보 활용

### InnoDB 스토리지 엔진

1. 레코드를 PK순으로 정렬해서 저장
1. PK를 통한 범위 검색이 매우 빠름(일반적인 웹서비스의 경우 쓰기 요청보다 읽기 요청이 많으므로 클러스터링 처리가 일반적)
1. 클러스터링으로 인한 쓰기 성능 저하(PK가 변경될 경우 레코드의 물리적 순서도 바꿔줘야하기 때문)

<details>
<summary>MySQL Cluster: When to use</summary>

1. To shard your database to meet growing volumes of write (UPDATE, INSERT, DELETE) operations
1. To ensure results from SELECT operations are consistent, regardless of which node they are 1 returned from
1. Would a failure of the database result in application downtime.

source: https://www.w3resource.com/mysql/mysql-cluster-overview.php
</details>

## 사진, 도표 첨부(필요시)

## TIL 챌린지 날짜 기록

- [ ] 챌린지 진행: 2022.xx.xx

## TIL 모티브 설명
우아한 테크 코스에서 진행되는 10분 테코톡 강의 수강 후 TIL 형식 정리

## 테코톡이란? 
> 🙋‍♀️ 우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. 🙋‍♂️ '10분 테코톡'이란  우아한테크코스 과정을 진행하며 크루(수강생)들이 동료들과 학습한 내용을 공유하고 이야기하는 시간입니다. 서로가 성장하기 위해 지식을 나누고 대화하며 생각해보는 시간으로 자기 주도적인 성장을 지향하는 우아한테크코스의 문화 중 하나입니다.

> 🌕우아한테크코스란 🌕 우아한테크코스는 일반 사용자용 서비스를 개발하는 회사가 필요로 하는 역량을 가진 프로그래머를 양성하기 위한 교육입니다. 우리의 목표는 자기 주도적으로 학습하고 성장하고 싶은 개발자를 위한 교육을 만드는 것입니다.
