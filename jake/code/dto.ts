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

// DTO 송신 메소드(Service layer)
function createNewAnimal() {
    const newName: string = "rainbow"

    const animalDTO = new AnimalDTO()
    animalDTO.setName(newName)

    return animalDTO
}

// DTO 수신 메소드(Web layer)
function getNewAnimal() {
    const animalDTO = createNewAnimal()
    const animalName = animalDTO.getName()

    return animalName
}

// 불변성 DTO 클래스(데이터 변경 불가, 불변성)
class immuAnimalDTO {
    public readonly name:string;

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

// VO 클래스 생성
class valueObjectMoney { 
    public readonly value: number; 
    constructor(_value:number ) { this.value = _value };

    // DTO와 달리 추가 로직이 존재할 수 있음
    public getHalfValue() { return this.value / 2}
}