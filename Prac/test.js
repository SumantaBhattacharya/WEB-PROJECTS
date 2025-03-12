// cd "C:\Users\Sumanta Bhattacharya\OneDrive\Documents\Desktop\Backend/Prac"       
// node test.js 

// Whoeever follows this blindly achieves the greatness and unbeatable wisdom in js

// hign order functions
// constructor functions
// first class functions
// new keyword
// iife
// prototype
// protyple inheritance
// this call apply bind
// pure functions and impure functions
// closure

// Can you explain what is high order function?
// Higher order Functions are the functions Which accept a function in a parameter or return of function,
// or both. For example, for each method, always takes another function inside it. So for each is a higher order function.


// hign order functions
function Makaut(val){
}
Makaut(function(){
})

function Maulanaakaut(){
    return function(){
    }
}// closures

Maulanaakaut()

var arr = [1,2,3,4,5]

arr.forEach(function(e){
    console.log(e);// foreach itself is a function is a higher order function
})

// constructor functions

// constructor + new  = instance
// instace is craeted by contructor function

function stackOfBiscuits(color){
    this.color = color;
    this.taste = "sugary";
    this.shape = "rectrangle";
    this.edable = true;
}

const Bis = new stackOfBiscuits("red")

console.log(Bis);

// The function which whenever in book with new keyword returns an object, if we use this keyword inside that function,
// it returns an object with all of
// the properties and methods mentioned inside that Function with this keyword such function is called constructor function.
// New keyboard in front of function call makes a new blank object and returns to the function variable.
// What is first class functions
// In language is seek to have first class functions when the functions in that language are treated as variables.
// You can save them. You can pass. them as an arguments to another functions.

// var func = function(){
    
// }

// new keyword creates a new object
// {
// age: 56,
// }

// iife => immediately invoked function expression
// like gsap
// invoke/call a function in such a way we can make a private variable

var IIFE = (function(){
    let age = 19//private variables
    return {
        getter: function name(params) {
            console.log(age);// {} blank object
        },setter: function name(params) {
            age = params;
        }
    }//it can be accessed only here not outside of the function
    console.log("hello");
})()

IIFE.getter(); // This will print 19 to the console

IIFE.setter(56); // Update age to 56
IIFE.getter(); // Now prints 56

// Prototype
var obj = {
  name: "Sumanta",
};

console.log(obj.name); 
console.log(obj.hasOwnProperty('name')); 


// Today contains many helper properties and methods which we can use to complete our task.
// Let's say we create an array, and we want to know length of it. What do we do? We use dot length property on array.
// Did we create dot length on that array? No, but it still contains dot length. The question is, how the answer is, many properties and methods are already available to use, banned by javascript created. inside prototype of every object.
// var arr = [1,2,3,4,5]
// arr.length
// prototype is a property of every object

// Prototyple inheritance
// Prototype inheritance is basically passing parents features properties to children to do the same thing 
// javascript with the help of prototype(One extra prototype is always given by javascript to every object)
// is called prototypical inheritance

var human = {
    name: "Sumanta",
    age: 19,
    gender: "male",
    isalive: true,
}

var sheryiansStudent = {
    canWalk: true,
    canTalk: true,
    study: function(){
        console.log("I am studying");
    }
}

sheryiansStudent.__proto__ = human

console.log(sheryiansStudent); // Output: Manager
const KA = `Sheryians always says ${sheryiansStudent.study()}`; // Output depends on previous line

console.log(KA);

// const K= `Sheryians always says ${sheryiansStudent.study()}`;
// console.log(K); 

console.log(sheryiansStudent.isalive); 

// This keyword is a special keyword in javascript, which changes its value in different context. 
// outside {} global scope
// inside {} local scope

// call apply bind
// call use to help to chnage the rference of this

function abcdef(params) {
    console.log(this);//window
}

var object_sher ={
    age:17,
}

console.log(abcdef.call(object_sher))

function abcdefg(val,val2,val3) {
    console.log(this,val,val2,val3);//window
}

var object_shery ={
    age:17,
}

console.log(abcdefg.call(object_shery,1,2,3))

// apply

function naming(n1,n2,n3) {
    console.log(this,n1,n2,n3);
}

var object_sheryi ={
    age:17,
}

naming.apply(object_sheryi,[5,2,3])

// bind

function namings(n1,n2,n3) {
    console.log(this,n1,n2,n3);
}

var object_sheryia ={
    age:18,
}

var binded = naming.bind(object_sheryia)
console.log(binded(1,2,9)); 

// Nakri.com

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotive();

