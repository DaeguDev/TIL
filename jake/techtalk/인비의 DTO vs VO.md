## 주제 작성
- 백엔드/DTO와 VO

## Introduction

1. 키워드: DTO, VO, J2EE(Java 2 Enterprise Edition), 데이터 전달용, 값 표현용

> J2EE는 자바 기술로 기업환경의 어플리케이션을 만드는데 필요한 스펙들을 모아둔 스펙 집합.
J2EE를 만든 것은 Sun Microsystems이고 SUN에서 J2EE 스펙을 시범적으로 구현해두기는 하지만, IBM, BEA, Oracle, HP, Iona등 여러 벤더들도 그 스펙을 구현할 수 있으며 J2EE 호환성을 검증하는 기구의 검증을 통과하기만 하면 J2EE 호환 제품으로 시장에 출시할 수 있다.

출처: [Today I Learned. @cheers_hena 치얼스헤나](https://cheershennah.tistory.com/74)

## Body

### DTO: Data Transfer Object

- 계층간 데이터를 전달하기 위해 사용하는 객체. Controller layer와 Service layer 사이 데이터를 전달하는 역할을 한다. getter/setter 메소드 만을 가지고 있으며 별도의 다른 로직이 존재하지 않는 것이 특징.

- sender(controller, web layer) <====(setter)====> DTO <====(getter)====> receiver(service, service layer)

#### DTO Typescript 예시

```ts 
// DTO 객체 클래스
class AnimalDTO {
    public name:string = "navi";

    // DTO getter
    public getName() { return this.name }

    // DTO setter
    public setName(_name: string) { this.name = _name }
}

const cat = new AnimalDTO()
console.log(cat.getName())
cat.setName("Jake") 
console.log(cat.getName())

// DTO 전송 메소드(Service layer)
function sendNewAnimal() {
    const newName: string = "rainbow"

    // DTO setter로 데이터 세팅
    const animalDTO = new AnimalDTO()
    animalDTO.setName(newName)

    // return DTO 
    return animalDTO
}

// DTO 수신 메소드(Web layer)
function getNewAnimal() {
    const animalDTO = createNewAnimal()

    // DTO getter로 전달받은 데이터 출력
    const animalName = animalDTO.getName()

    return animalName
}
```

#### 불변성을 가진 DTO

- DTO가 불변성을 가질 경우 전송된 데이터의 위/변조가 되지 않았음을 보장할 수 있음. 

```ts
// 불변성 DTO 클래스(데이터 변경 불가, 불변성)
class immuAnimalDTO {
    public readonly name:string; // 초기화 이후 readonly

    // 데이터 초기화
    constructor(_name: string) {
        this.name = _name 
    }

    // DTO getter
    public getName() { return this.name }

    // 불변성 DTO는 setter가 존재하지 않음
}

const immuAnimal = new immuAnimalDTO("river")
console.log(immuAnimal.getName())
```

#### DTO 클래스와 Entity 클래스의 분리

- Entity class: 데이터베이스와 매핑. 테이블/스키마의 변경이 이루어짐. 많은 비즈니스 로직/서비스 레이어가 움직이는 기준.
- View: 비즈니스 로직 반영. 
- DTO class: view의 요청/응답 값을 전달하는 클래스로 사용. Entity 클래스를 사용할 경우 연결된 많은 로직들이 그에 상응해서 계속 변화해야 하므로 DTO 클래스를 통해 데이터를 전달하는 것이 좋다.

### VO: value object

- 값 그 자체를 표현하는 객체. DTO 클래스가 오직 getter/setter 메소드만을 가지며 별도의 로직이 존재하지 않았던 반면, VO의 경우 추가 로직을 넣을 수 있다.

```ts
// VO 클래스 생성
class valueObjectMoney { 
    public readonly value: number; 
    constructor(_value:number ) { this.value = _value };

    // DTO와 달리 추가 로직이 존재할 수 있음
    public getHalfValue() { return this.value / 2}
}
```


## 사진, 도표 첨부(필요시)

## TIL 챌린지 날짜 기록
- [x] 챌린지 진행: 2022.04.14

## TIL 모티브 설명
우아한 테크 코스에서 진행되는 10분 테코톡 강의 수강 후 TIL 형식 정리

## 테코톡이란? 
> 🙋‍♀️ 우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. 🙋‍♂️ '10분 테코톡'이란  우아한테크코스 과정을 진행하며 크루(수강생)들이 동료들과 학습한 내용을 공유하고 이야기하는 시간입니다. 서로가 성장하기 위해 지식을 나누고 대화하며 생각해보는 시간으로 자기 주도적인 성장을 지향하는 우아한테크코스의 문화 중 하나입니다.

> 🌕우아한테크코스란 🌕 우아한테크코스는 일반 사용자용 서비스를 개발하는 회사가 필요로 하는 역량을 가진 프로그래머를 양성하기 위한 교육입니다. 우리의 목표는 자기 주도적으로 학습하고 성장하고 싶은 개발자를 위한 교육을 만드는 것입니다.
