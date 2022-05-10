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
// needs debugging to include arrow functions

let totalAmount = orders.reduce( (sum, order) => {
    console.log("hello", sum, order);
    return sum + order.amount
}, 0)


/* Comparison purposes
let totalAmount = 0
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
}
 */

console.log(totalAmount);