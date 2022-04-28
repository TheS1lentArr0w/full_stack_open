const me = {
    name: 'Paulo',
    age: 23,
    education: 'MEng',
    greet: function() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.')
    },
    doAddition: function(a, b) {
        console.log(a+b)
    }
}


me.greet()

const refToGreet = me.greet

refToGreet()