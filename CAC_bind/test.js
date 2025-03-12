// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> cd "C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\CAC_bind"
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> node test.js
// node "C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\CAC_bind\test.js"

// SSC
// lamda Functions - arrow functions
// Temporal dead zone
// currying
// pure functions

console.log(a);
var a = 12;
//undefined

// Temporar dead zone
// console.log(a);
// let a = 12;
// error

// whenever we craete a variable using let or const 
// until it is initialised it in is in the phase called temporal dead zone lead to reference error
// hoisting is prsent in the the js
// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of 
// their containing scope during the compile phase, before the code execution starts. 

// currying

// when we have a functions which is containing more than one parameter we can "simplify" 
// it by simply breaking into into series of function and each function retiurn a new function
// which is using previous functionm parameters

function  calculate(a,b){
    return a + b
}

let calculation = calculate(12,3)
console.log(calculation);

function cal(a){
    return function(b){
        return a + b;
    };
}

var ans = cal(12);
var ans1 = ans(2); 

console.log(ans1); // Output: 14

// pure functions
// any function which cannot chnage the value of a global variable and
// if we give a value in the arguments it will return the same value 

var global = 6
function pure(a){
    console.log(a+9);
}

function Not_pure(a){
    global++;
}

function No_pure(a){
    console.log(Math.random()*a);
}

No_pure(12)
No_pure(12)
No_pure(12)
No_pure(12)
No_pure(12)

// pure function is any function which has these 2 features:
// i) it should always return same output for same output
// ii) it will never change/update the value of a global variable

// PURE FUNCTION

// function calc(val){
// return val +2 ;
// }
// always same answer if you press same value for 'val' argument, hence this function is pure function

// IMPURE FUNCTION

// let someval = 0;
// function calc(x){
//     someval++;
// }

/*

Every
-----

Returns true if every element of array gives true for some function. Else returns false.
it either return true or false.
for all the element in the array matches the condition then only its true.

like AND

arr.every(some function defination or name);
*/


// Examples:

let arr = [1,2,3,4];

console.log(arr.every(x => x > 0)); // true
console.log(arr.every(x => x % 2 === 0)); // false === (Strict Equality). "===" Checks both value and data type. Perform No type conversion (values must be exactly the same)

console.log(arr.every( (el) =>{
    return el > 0;
} ));

console.log(arr.every( (el) => (el % 2 == 0) )); // "==" Checks only values, not data types. Performs type coercion (converts values if necessary).

/*

SOME
-----

Returns true if some elements of an array give true for some function. Else returns false.

arr.some(some function defination or name);

like OR

*/

let arr1 = [1,2,3,4];

console.log(arr1.some(x => x > 5)); // false
console.log(arr1.some(x => x % 2 === 0)); // true

console.log(arr1.some( (el) =>{
    return el < 5;
} ));

console.log(arr1.some( (el) => (el % 2 == 0) )); // "==" Checks only values, not data types. Performs type coercion (converts values if necessary).

/*
Reduce
---------

Reduces the array to a single value

arr.reduce( reducer function with 2 variables for (accumulator, element) );

*/

let arr2 = [1,2,3,4];

// console.log(arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // 10
console.log(arr2.reduce((accumulator, currentValue) => accumulator + currentValue)); // 10
// console.log(arr2.reduce((accumulator, currentValue) => accumulator * currentValue, 1)); // 24
console.log(arr2.reduce((accumulator, currentValue) => accumulator * currentValue)); // 24

// ReduceRight
// the accumulator stores the previous result
// console.log(arr2.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0)); // 10
console.log(arr2.reduceRight((accumulator, currentValue) => accumulator + currentValue)); // 10
console.log(arr2.reduceRight((accumulator, currentValue) => accumulator * currentValue, 1)); // 24

// git pull origin main --allow-unrelated-histories
// This downloads missing files from GitHub without overwriting your local work.
// git remote -v
// git remote remove origin  

console.log(5 == "5"); // true (string "5" is converted to number 5)
console.log(false == 0); // true (false is converted to 0)
console.log(null == undefined); // true

console.log(5 === "5"); // false (different data types: number vs. string)
console.log(false === 0); // false (boolean vs. number)
console.log(null === undefined); // false (different types)
