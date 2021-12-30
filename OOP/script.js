const obj = {
    firstName : "John",

    calcAge : function(){

    }
};

// User {
//     user_Name
//     password
//     email

//     login(){

//     }
// }

// {
//     user_Name : "John",
//     password : "1233"
//     email : "john@example.com"

//     login(){

//     }
// }

/**
  1. constructor methods
  2. ES6
  3. Object.creata()
 */

const Person = function(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
}

/**
 * creates empty object {}
 * function called, creates this 
 * {} linked to prototype
 * automatically return {}
 */


const ebuzer = new Person("Ebuzer", 1988)
const ahmet = new Person("Ahmet", 1989)

// console.log(ebuzer)
// console.log(ahmet)

Person.prototype.calcAge = function(){
    console.log(2022 - this.birthYear)
}

console.log(ebuzer)
console.log(ebuzer.calcAge())

const arr = [1, 12, 5, 5, 37, 12, 33, 33, 96]
console.log(arr)

Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique())

console.log(ahmet)
console.log(ahmet.__proto__ == Person.prototype)




