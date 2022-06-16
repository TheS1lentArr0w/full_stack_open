// Example of Higher-order functions, specifically using 'filter'

let animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'dog'},
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    { name: 'Jimmy', species: 'fish'},
]

let isDog = function(animal) {
    return animal.species === 'dog'
}

let dogs = animals.filter(isDog)

/* If not using higher-order functions, can solve the problem with the long-winded code below
var dogs = []
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs.push(animals[i])
    }
}
*/
// console.log(dogs);


// Example of 'map' function

/* Without using arrow functions
let names = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species
})
 */


// When arrow functions are used
let names = animals.map( (x) => x.name + ' is a ' + x.species )

/* Comparison purposes, long-winded code
let names = []
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name)
}
*/
// console.log(names);


// Example of 'reduce'

let orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
]

let totalAmount = orders.reduce( (sum, order) => {
    return sum + order.amount
}, 0)


/* Comparison purposes
let totalAmount = 0
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
}
 */



// Playground
const courses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
        },
        {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
        },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
        }
        ]
    }, 
    {
        name: 'Node.js',
        id: 2,
        parts: [
        {
            name: 'Routing',
            exercises: 3,
            id: 1
        },
        {
            name: 'Middlewares',
            exercises: 7,
            id: 2
        }
        ]
    }
]

let result = courses.map( (course) => {
    return(
        course.name
    )
} )

let transformation = courses[0].map( () )