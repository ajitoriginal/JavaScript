// console.log("Hello from main.js");
// let age = 25;
// console.log(age);
// let a = null;
// console.log(a+4)
// console.log(5+'4')
// console.log('5'+4)
// console.log(Boolean(' '))
// for(let i = 1; i <= 5; i++) {
//     console.log(`Iteration Number ${i}`)
// }
// let i = 1
// for(; i <= 5;) {
//     console.log(`Iteration Number ${i}`)
//      i++
// }
// if(true) {
//     var myName = 'Ajit'
//     console.log(myName)
// }
// // kk()
// function testFn() {
//     // const myName = 'Singh'
//     console.log(myName)
// }

// testFn()

// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer()

// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()
// fn()

// function sum(a, b, c) {
//   return a + b + c;
// }

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a+b+c
//         }
//     }
// }

// function curr(fn) {
//     return function(a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a,b,c)
//             }
//         }
//     }
// }

// console.log(sum(2, 3, 5));
// console.log(sum(2)(3)(5));
// console.log(curr(sum)(2)(3)(5));

//implicit binding
// const person = {
//     name: "Ajit",
//     sayMyName: function () {
//         console.log(`My name is ${this.name}`)
//     }
// }

// person.sayMyName()

//explicit binding
// function sayMyName () {
//     console.log(`My name is ${this.name}`)
// }

// sayMyName.call(person)

//new binding
// function Person(name) {
//     this.name = name
// }

// const p1 = new Person('Tony')
// const p2 = new Person('Bruce')
// console.log(p1.name, p2.name)

//default binding
// globalThis.name = 'Kumar'
// function sayMyName () {
//     console.log(`My name is ${this.name}`)
// }

// sayMyName()

/*
Order of preference
New Binding
Explicit Binding
Implicit Binding
Default Binding
*/

// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }

// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }
// function SuperHero(fName, lName) {
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype = Object.create(Person.prototype)
// SuperHero.prototype.fightCrime = function () {
//     console.log(`Fighting crime`)
// }

// const batman = new SuperHero('Ajit', 'Singh')
// console.log(batman.isSuperHero)
// console.log(batman.firstName)
// console.log(batman.lastName)
// console.log(batman.fightCrime())
// console.log(batman.getFullName())

// class Person {
//     constructor(fName, lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }

//     sayMyName () {
//         return `My name is ${this.firstName} ${this.lastName}`
//     }
// }

// const p1 = new Person("Tony", "Stark")
// console.log(p1.sayMyName())

// class SuperHero extends Person {
//     constructor(fName, lName) {
//         super(fName, lName)
//         this.isSuperHero = true
//     }

//     fightCrime() {
//         console.log('Fighting crime')
//     }
// }

// const batman = new SuperHero('Bruce', 'Wayne')
// batman.fightCrime()
// console.log(batman.sayMyName())

// const obj = {
//   [Symbol.iterator]: function () {
//     let step = 0;
//     const iterator = {
//       next: function () {
//         step++;
//         if (step === 1) {
//           return { value: "Hello", done: false };
//         } else if (step === 2) {
//           return { value: "World", done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//     return iterator;
//   },
// };

// for (const word of obj) {
//   console.log(word);
// }

function normalFn () {
    console.log('Hello')
    console.log('World')
}

// normalFn()
// normalFn()

function* generatorFn () {
    yield 'Hello'
    yield 'World'
}

const generatorObj = generatorFn()

for(const word of generatorObj) {
    console.log(word)
}
