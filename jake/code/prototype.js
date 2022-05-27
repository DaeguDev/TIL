class MyDate { 
    static year = 2022
    getter() { return year }
}

console.log(typeof MyDate) // function type

// class
class Dog {
    name = "navi"
    sound = "bark"
    
    makeSound(){ console.log(this.sound) }
}

const myDog = new Dog()
myDog.makeSound() // bark
console.log(myDog.__proto__)

// function
function Dog2() {
    this.name = "navi"
    this.sound = "bark"
    this.makeSound = function(){
        console.log(this.sound) 
    }
}

const myDog2 = new Dog2()
myDog2.makeSound() // bark

const dog = { 
    name: "navi"
}

const cat = {
    sound: "meow"
}

dog.__proto__ = cat

console.log(dog.sound) // "meow"

function hello() { 
    this.message = function() { console.log("hi") }

}

const check = new hello()
check.message()


function helloPrototype() {}
helloPrototype.prototype.hello = hello

const check2 = new helloPrototype()
check2.hello()