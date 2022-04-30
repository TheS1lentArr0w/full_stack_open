class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam', 27)
adam.greet()

const paulo = new Person ('Paulo', 23)
paulo.greet()