// alert, confirm, prompt

// alert("Alert Message");
// confirm("Are you sure?");
// prompt("Write your name");


// console
// TODO use console.time and console.timeEnd
// console.log("Hello from console");
// console.error("Error message");
// console.info("Info message");
// console.warn("Warning message")


// Accessing DOM
// document.getElementsByTagName('h1')[0].innerHTML = 'Rame'
// document.getElementsByTagName('h1')[0].style.color = 'red';
// document.getElementsByTagName('h1')[0].style.backgroundColor = 'yellow';
// document.getElementById('myId')
// document.getElementsByName('hello')
// document.querySelector('div h3#test')


// Writing in DOM. document.write
// document.write('Test')
// document.write('<button>Test</button>')
// document.write('<h3 style="color: blue">Test</h3>')


// variables, types. let vs const vs var
// const name = 'Zura'; // string
// const age = 28; //number
// const height = 1.85; //number
// const isMale = true; //boolean
// const salary = undefined; //undefined
// const loc = null; // null

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof height);
// console.log(typeof isMale);
// console.log(typeof salary);
// console.log(typeof loc);

// block scope. difference between let and var
// if (true) {
//     // let x = 15;
//     var x = 15;
// }
// console.log(x)
// var y = 17;
// var y = 18;
// console.log(y);

// let z = 17;
// let z = 18; //Error



// comments
// single line comment
/*
multi 
line comment
*/

// strings/string methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// const name = 'Zura'
// const message = `Hello from "${name}". 
// My surname is Sekhniashvili`;

// console.log(message);
// const parts = message.split(" ");
// console.log(parts)
// console.log(parts.join(", "))
// console.log(message.toUpperCase())
// console.log(message.toLowerCase())
// console.log(message.indexOf("."))
// console.log(message.substr(message.indexOf('.')+2))


// conditionals, ternary
// const age = 28;
// const salary = 100000;
// if (age > 70){
//     console.log("You are old")
// } else if (age > 50) {
//     console.log("You are not young")
// } else if (age > 30) {
//     console.log("You are young")
// } else {
//     console.log("You are child boy...")
// }


// loops (while, do-while, for)
// let n = 10;
// for (let i = 0; i<n; i++) {
//     console.log(`Index ${i}`);
// }

// let i = 0;
// while (i < n) {
//     console.log(`Index ${i}`);
//     i++;
// }   
// do {
//     console.log(`Index ${i}`);
//     i++;
// } while(i < n);


// functions
// function sum(a, b) {
//     return a + b;
// }
// const sum = (a, b) => a + b;
// console.log(sum(4, 5))

function testFn(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}
const test = a => b => c => a * b * c;

// console.log(test(1, 2, 3))
// console.log(test(1)(2, 3))
// console.log(test(1)(2)(3))

const tmp = test(1);
const tmp2 = tmp(2);
const tmp3 = tmp2(3);
console.log(tmp)
console.log(tmp2)
console.log(tmp3)


// Write program to calculate n factorial
