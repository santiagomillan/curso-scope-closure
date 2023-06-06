//Global Scope
var fruit = "apple"
console.log(fruit)

function bestFruit() {
    console.log(fruit)
}

bestFruit()

function countries() {
    country = "Colombia" //global
    console.log(country)
}

countries()
console.log(country)