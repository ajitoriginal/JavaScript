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

function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()
fn()
fn()
fn()