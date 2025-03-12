// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> cd "C:\Users\Sumanta Bhattacharya\OneDrive\Documents\Desktop\Backend/Bind"
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> node test.js

//SSC
//lamda Functions - arrow functions
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
// any function which cannot change the value of a global variable and
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

