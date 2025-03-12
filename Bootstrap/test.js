// Welcome to Node.js v20.12.2.
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> cd "C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1"
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> node Test.js
// hello

// execution context[                        ]
//                  [                        ]
//                  [Global execution context]   this referes empty object in node environment
// this actually refers to window object

function setUsername(username) {
    this.username = username
    console.log("youth");
}
 
function createUser(username, email, passward) {
    setUsername.call(this, username)
    // call method pass the current execution context to another function
    this.email = email
    this.passward = passward
}

const chai = new createUser("chai", "chai@gmail.com", "1223")
console.log(chai);

// class constructor and static
// ES6

class User {
    constructor(username, email, passward) {
        this.username = username
        this.email = email
        this.passward = passward
    }

    encryptPassward() {// this is a function inside classs called method
        return `${this.passward}abc`

    }

    // changeUsername(){
    //     return this.username.charAt(0).toUpperCase()+ this.username.slice(1);
    // }

    changeUsername() {
        // Split the username by spaces
        const words = this.username.split(' ');
        // Capitalize the first letter of each word
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        // Join the words back together
        return capitalizedWords.join(' ');
    }


}

const USER = new User("sudip bhattacharya ", "sudbha98@gmail.com", "123")

console.log(USER.encryptPassward());
console.log(USER.changeUsername());


// same thing using function syntax
function USER_(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

USER_.prototype.encryptPassword = function () {
    return `${this.password}abc`; // prototype is used when we need to inherit a function
}

USER_.prototype.changeUsername = function () {//using __proto__. is technically possible, it's generally not recommended, especially when you have a constructor function
    // Split the username by spaces
    const words = this.username.split(' ');
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the words back together
    return capitalizedWords.join(' ');
}

const tea = new USER_("sudip bhat ", "sudip98@gmail.com", "321");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// inheritance

class UsingUser {
    constructor(username) {
        this.username = username
    }

    logMe() {
        // this.logMe(`USERNAME is ${this.username}`)
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends UsingUser {
    constructor(username, email, passward) {
        super(username)
        this.email = email
        this.passward = passward
    }

    addCourses() {
        console.log(`A new couse was added by ${this.username}`);
    }
}

const chaiPani = new Teacher("chaiPani", "chaiPani@gmail.com", "123")
chaiPani.addCourses()
chaiPani.logMe()


const masalaChai = new UsingUser("masala_chai")
masalaChai.logMe()

console.log(chaiPani instanceof Teacher);
console.log(chaiPani instanceof UsingUser);

// STATIC PROPERTIES

class currentUser {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Hello! Username: ${this.username}`);
    }

    static createID() {
        return `123`
    }//one we give or use static keyword it loses the acces to user

}

const hitesh = new currentUser("hitesh")
// console.log(hitesh.createID())

class Professor extends currentUser {

    constructor(username, email) {//order is not decided we can give any order
        super(username)
        this.email = email
    }
}

const P1 = new Professor("Suprit", "Suprit@gmail.com");
P1.logMe();

//console.log(P1.createID());not even child can access

//Objects
// math pi

console.log(Math.PI);
const descriptor = Object.getOwnPropertyDescriptors(Math, "PI")
console.log(descriptor);

// const myNewObject = Object.create(null)

const chai_or_coffie = {
    name: `ginger chai`,
    price: 250,
    isAwailable: true,
    orderChai: function () {
        console.log("chai nhe bni");
    }
}

console.log(chai_or_coffie);
console.log(Object.getOwnPropertyDescriptors(chai_or_coffie));
console.log(Object.getOwnPropertyDescriptors(chai_or_coffie, "name"));

Object.defineProperty(chai_or_coffie, "name", {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptors(chai_or_coffie, "name"));

for (let [keys, value] of Object.entries(chai_or_coffie)) {
    if (typeof value !== 'function') {
        console.log(`${keys}:${value}`);
        //name -> enumerable: false
    }

}

// getter and setter

class User_ {// classes dont have any parenthesis
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase() // ${this._email}abc
    }//race condition to avoid we uses _email

    set email(value) {//Maximum call stack size exceeded
        this._email = value
    }// we dont need to return setters

    encrypt() {
        console.log(`${this.password}abc`);
    }

    encryption() {
        this.password += 'abc';
        console.log(this);
    }

}

const Ramesh = new User_("hitesh@gmail.com", "remesh123")
console.log(Ramesh);
console.log(Ramesh.email);
Ramesh.encrypt();
Ramesh.encryption();


// old version
// get and set
function UsefulUser(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });
}

const user_use = new UsefulUser("usefulUser@gmail.com", "68979");
// Access the email and password properties using the getters
console.log(user_use.email);
console.log(user_use.password);

// Update the email and password properties using the setters
user_use.email = "updatedUser@gmail.com";
user_use.password = "12345";

console.log(user_use.email);
console.log(user_use.password);


// another way class - function - object

const User_being_useful = {
    _email: "User_being_useful@gmail.com",
    _password: "USB",

    get email() {
        return this._email.toLowerCase()//its not a method its a property
    },
    set email(value) {
        this._email = value
    }// getter and setter encapsulation
}

const tea_equals_chai = Object.create(User_being_useful)// new is a contructor function factory function
console.log(tea_equals_chai.email);//_email
// _ private property es 2022 #

// Lexical scoping and closure

// Closures

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        let secret = "i ate chocolate"
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    function secret() {
        console.log(secret);// its reference is denied
        console.log(name);
    }
    
    displayName();
    secret()
}
init();

function makeFunc() {
    const name = "Firefox";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();
// The displayName function is not directly accessible outside
//  of makeFunc, so calling displayName() like this will result 
// in a reference error. If you want to log the name variable outside of 
// makeFunc, you need to use the myFunc variable that holds the reference to the displayName function.
// console.log(displayName())
// console.log(myFunc.displayName())

function makeFuncs() {
    const name = "Firefoxes";
    return {
        displayName: function () {
            console.log(name);
        }
    };
}

const myObj = makeFuncs();
myObj.displayName(); // This logs "Firefox"

//var Orange  =  document.querryselector(.orange);
// Orange.addEventlistener("click",function(){
// Orange.style.backGroundColor = "green"
// })

// document.getElementById("orange").onclick = function(){
// document.body.styole.backgroundColor = "green"
// }

// function clickHnadler(color){
//     return function(){
//         document.body.style.backgroundColor = `${color}`

//     }
// }

// document.getElementById("oranges").onclick = clickHnadler("orange")
// document.getElementById("greeney").onclick = clickHnadler("green")

// 33,703 bytes: Total size of all files in the directory.

// array
// packed or continious array
// holey array

//ARRAY OPTIMIZATION
// SMI(small integer)
// Packed elements
// Double(float,string,function)



// const myArr = [1,2,3,4,5]
//     %DebugPrint(myArr)
    
const myArr = [1,2,3,4,5] //only integers //smi
// PACKED_SMI_ELEMENTS
myArr.push(6.0)//ONCE THE ARRAY COVERTS TO PACKED_DOUBLE_ELEMENTS WE CANNOT GET BACK PACKED_SMI_ELEMENTS EVEN IF WE DELETE THE VALUE
// PACKED_DOUBLE_ELEMENTS
myArr.push('7')
// PACKED_OR_CONTINIOUS_PACKED_ELEMENT
myArr[10] = 11 // DUE TO INCLUSION OF MULTIPLE TYPES
// HOLEY_ELEMENTS


console.log(myArr);
console.log(myArr.length);
console.log(myArr[9]);

const arrfour = new Array(3)
arrfour[0] = '1'
arrfour[1] = '2'
arrfour[3] = '3'

const arrfive = []
arrfive[0] = '1'
arrfive[1] = '2'
arrfive[3] = '3'

arrfive.push(Infinity)//packed_double
arrfive.push(NaN)//packed_double
// for,for-of,forEach,

//status cod
// 22 - OK
// 404 - Not found
// 400 - bad request
// 500 - internal server error

/* The Terminal */
// A text input and output environment.
// Different Terms
// Command line - any interface that is used by entering textual commands (gen. Windows centric)
// Terminal - This is a type of command line(gen. MAC centric)
// Console - A command-line interface used to work with your computer
// shell - A program running on Terminal
// Bash -  A program running on terminal
// Z-shell - Another shell(default)


// java & OOPS in java
// html,css,js,gsap,locomotive,swipper js,tailwind,bootstrap,git and github,sql.
// node js,express js, mongo db,react,three.js
// DSA in java



// BOUND CHECK --> till length(there is a bound)
// hasOwnProperty(arr, 9)
// hasOwnProperty(arr.prototype, 9)
// hasOwnProperty checkm is the most espensive check in js
// holes are very expensive

// SMI HAS THE HIGHEST OPTIMIZATION
// SMI > DOUBLE > PACKED
// HOLEY_SML(SMALL INTEGER)_ > HOLEY_DOUBLE_ELEMEMTS > HOLEY_PACKED_ELEMENTS

// js has prototyple nature
// In JavaScript, every object has a prototype. Prototypes are essentially templates from which other objects inherit properties and methods.

//  bone jsCore
// C:\Users\SUDIP BHATTACHARYA>cd C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1

// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>npm install -g jsvu

// added 182 packages in 51s

// 10 packages are looking for funding
//   run `npm fund` for details
// When you run npm fund, npm will display information 
// about the packages that are looking for funding, including
// details such as the funding platform (e.g., Open Collective, Patreon)
// and how you can support the maintainers financially if you wish to do so.

// "To check the Windows version using PowerShell, you can use the Get-CimInstance cmdlet. Open PowerShell and type:
// code
// Get-CimInstance Win32_OperatingSystem | Select-Object Caption, Version
// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>echo %PROCESSOR_ARCHITECTURE%
// AMD64
// The output AMD64 indicates that your Windows system is 64-bit (win64).
//  This means your system supports running 64-bit applications and has a 64-bit processor architecture. 
// 64-bit Architecture: AMD64 is a 64-bit extension of the x86 architecture.
//  It allows processors to handle larger amounts of memory and perform calculations
//  with 64-bit integers and memory addresses. This architecture offers advantages
//  such as increased performance and support for larger data sets in applications.
// Compatibility: AMD64 processors are backward compatible with 32-bit x86 software.
//  This means that you can run both 32-bit and 64-bit applications on AMD64-based systems.

// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>wmic cpu get name
// Name
// Intel(R) Pentium(R) CPU G3258 @ 3.20GHz


// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>jsvu --os=win64 --engines=all
// 📦 jsvu v2.4.0 — the JavaScript engine Version Updater 📦
// ✔ Read OS from config: win64
// ✔ Read engines from config: chakra, graaljs, hermes, javascriptcore, quickjs, spidermonkey, v8, xs
// ❯ Finding the latest Chakra version…
// ✖ HTTPError: Response code 403 (Server failed to authenticate the request. Make sure the value of Authorization header is formed correctly including the signature.)
// ✔ Found latest GraalJS version: val-24.0.1.
// ✔ URL: https://github.com/oracle/graaljs/releases/download/vm-al-24.0.1/graaljs-al-24.0.1-windows-amd64.zip
// ❯ Downloading…
//   [========================================================================] 100%

// ✖ HTTPError: Response code 404 (Not Found)
// ✔ Found latest Hermes version: v0.11.0.
// ✔ URL: https://github.com/facebook/hermes/releases/download/v0.11.0/hermes-cli-windows-v0.11.0.tar.gz
// ✔ Download completed.
// ❯ Extracting…
// Installing binary to ~\.jsvu\engines\hermes\hermes.exe…
// Installing binary to ~\.jsvu\engines\hermes\hermes-compiler.exe…
// Installing library to ~\.jsvu\engines\hermes\icudt64.dll…
// Installing library to ~\.jsvu\engines\hermes\icuin64.dll…
// Installing library to ~\.jsvu\engines\hermes\icuio64.dll…
// Installing library to ~\.jsvu\engines\hermes\icutest64.dll…
// Installing library to ~\.jsvu\engines\hermes\icutu64.dll…
// Installing library to ~\.jsvu\engines\hermes\icuuc64.dll…
// Installing library to ~\.jsvu\engines\hermes\msvcp140.dll…
// Installing library to ~\.jsvu\engines\hermes\vcruntime140_1.dll…
// Installing library to ~\.jsvu\engines\hermes\vcruntime140.dll…
// Installing wrapper script to ~\.jsvu\bin\hermes.cmd…
// Installing wrapper script to ~\.jsvu\bin\hermes-compiler.cmd…
// ✔ Extraction completed.
// ✔ Testing completed.
// ✔ Hermes v0.11.0 has been installed! 🎉
// ✔ Found latest JavaScriptCore version: v257567.
// ✔ URL: https://s3-us-west-2.amazonaws.com/archives.webkit.org/wincairo-x86_64-release/257567@main.zip
// ❯ Downloading…
//   [========================================================================] 100%
// ✖ HTTPError: Response code 403 (Forbidden)
// ✔ Found latest QuickJS version: v0.4.1.
// ✔ URL: https://github.com/quickjs-ng/quickjs/releases/download/v0.4.1/qjs-windows-x86_64.exe
// ✔ Download completed.
// ❯ Extracting…
// Installing binary to ~\.jsvu\engines\quickjs\qjs.exe…
// Installing wrapper script to ~\.jsvu\bin\quickjs.cmd…
// ✔ Extraction completed.
// ✔ Testing completed.
// ✔ QuickJS v0.4.1 has been installed! 🎉
// ✔ Found latest SpiderMonkey version: v126.0b9.
// ✔ URL: https://archive.mozilla.org/pub/firefox/releases/126.0b9/jsshell/jsshell-win64.zip
// ✔ Download completed.
// ❯ Extracting…
// Installing library to ~\.jsvu\engines\spidermonkey\mozglue.dll…
// Installing library to ~\.jsvu\engines\spidermonkey\msvcp140.dll…
// Installing library to ~\.jsvu\engines\spidermonkey\nss3.dll…
// Installing library to ~\.jsvu\engines\spidermonkey\vcruntime140_1.dll…
// Installing library to ~\.jsvu\engines\spidermonkey\vcruntime140.dll…
// Installing binary to ~\.jsvu\engines\spidermonkey\spidermonkey.exe…
// Installing wrapper script to ~\.jsvu\bin\spidermonkey.cmd…
// ✔ Extraction completed.
// ✔ Testing completed.
// ✔ SpiderMonkey v126.0b9 has been installed! 🎉
// ✔ Found latest V8 version: v12.6.155.
// ✔ URL: https://storage.googleapis.com/chromium-v8/official/canary/v8-win64-rel-12.6.155.zip
// ✔ Download completed.
// ❯ Extracting…
// Installing library to ~\.jsvu\engines\v8\icudtl.dat…
// Installing library to ~\.jsvu\engines\v8\snapshot_blob.bin…
// Installing binary to ~\.jsvu\engines\v8\v8.exe…
// Installing wrapper script to ~\.jsvu\bin\v8.cmd…
// ✔ Extraction completed.
// ✔ Testing completed.
// ✔ V8 v12.6.155 has been installed! 🎉
// ✔ Found latest XS version: v4.6.0.
// ✔ URL: https://github.com/Moddable-OpenSource/moddable/releases/download/4.6.0/xst-win64.zip
// ✔ Download completed.
// ❯ Extracting…
// Installing binary to ~\.jsvu\engines\xs\xs.exe…
// Installing wrapper script to ~\.jsvu\bin\xs.cmd…
// ✔ Extraction completed.
// ❯ Testing…
// ✖ Error: Command failed with exit code 3221225477 (Unknown system error -3221225477): C:\Users\SUDIP BHATTACHARYA/.jsvu/bin/xs -s C:\Users\SUDIPB~1\AppData\Local\Temp\78e30e4dc1c327c224cd8932c44b60a6

// It successfully installed some engines like Hermes, QuickJS, SpiderMonkey, V8, and XS, 
// but encountered issues with GraalJS and JavaScriptCore due to HTTP errors (403 and 404).

// wmic cpu get name
// npm install -g jsvu
// jsvu -v
// jsvu --os=win64 --engines=all
// cd C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1
// Get-CimInstance Win32_OperatingSystem | Select-Object Caption, Version
// node -v
// echo %PROCESSOR_ARCHITECTURE%
// npm show jsvu version
// dir
// npm root -g
// cd C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules\jsvu
// cd engines
// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>"C:\Users\SUDIP BHATTACHARYA\.jsvu\bin\v8"
// "C:\Users\SUDIP BHATTACHARYA\.jsvu\bin\d8"
//  "C:\Users\SUDIP BHATTACHARYA\.jsvu\bin\v8-debug --allow-natives-syntax"



// jsvu v2.4.0
// Caption                         Version
// -------                         -------
// Microsoft Windows 10 Enterprise 10.0.17134
// v20.12.2
// AMD24
// 2.4.0
// C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules
// C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules\jsvu\engines
// V8 version 12.6.155
// "C:UsersSUDIP BHATTACHARYA.jsvin8"
// "C:UsersSUDIP BHATTACHARYA.jsvind8"

//https://github.com/GoogleChromeLabs/jsvu?tab=readme-ov-file

// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>npm show jsvu version
// 2.4.0

// ls is typically used in Unix-based systems (such as Linux or macOS) for listing directory contents.
// In Windows Command Prompt, the equivalent command to list directory contents is dir

// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>dir
//  Volume in drive C has no label.
//  Volume Serial Number is 5A6D-B593

//  Directory of C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1

// 05-05-2024  18:14    <DIR>          .
// 05-05-2024  18:14    <DIR>          ..
// 28-04-2024  12:05            16,050 index.html
// 28-04-2024  10:46               240 style.css
// 05-05-2024  19:06            16,782 test.js
// 05-05-2024  18:19                40 testy.js
//                4 File(s)         33,112 bytes
//                2 Dir(s)  17,210,863,616 bytes free

// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>npm root -g
// C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules

// C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1>cd C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules\jsvu

// C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules\jsvu>

// C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules\jsvu>cd engines

// C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules\jsvu\engines>dir
//  Volume in drive C has no label.
//  Volume Serial Number is 5A6D-B593

//  Directory of C:\Users\SUDIP BHATTACHARYA\AppData\Roaming\npm\node_modules\jsvu\engines

// 05-05-2024  18:23    <DIR>          .
// 05-05-2024  18:23    <DIR>          ..
// 05-05-2024  18:23    <DIR>          chakra
// 05-05-2024  18:23    <DIR>          graaljs
// 05-05-2024  18:23    <DIR>          hermes
// 05-05-2024  18:23    <DIR>          javascriptcore
// 05-05-2024  18:23    <DIR>          quickjs
// 05-05-2024  18:23    <DIR>          spidermonkey
// 05-05-2024  18:23    <DIR>          v8
// 05-05-2024  18:23    <DIR>          v8-debug
// 05-05-2024  18:23    <DIR>          xs
//                0 File(s)              0 bytes
//               11 Dir(s)  17,231,884,288 bytes free

// chakra: This directory likely contains the Chakra JavaScript engine files.
// graaljs: This directory likely contains the GraalJS JavaScript engine files.
// hermes: This directory likely contains the Hermes JavaScript engine files.
// javascriptcore: This directory likely contains the JavaScriptCore engine files.
// quickjs: This directory likely contains the QuickJS JavaScript engine files.
// spidermonkey: This directory likely contains the SpiderMonkey JavaScript engine files.
// v8: This directory likely contains the V8 JavaScript engine files.
// v8-debug: This directory likely contains debug versions of the V8 JavaScript engine files.
// xs: This directory likely contains the XS JavaScript engine files.

// 05-05-2024  18:23    <DIR>          v8-debug

// d8> "C:\Users\SUDIP BHATTACHARYA\.jsvu\bin\v8"
// "C:UsersSUDIP BHATTACHARYA.jsvin8"

// d8> "C:\Users\SUDIP BHATTACHARYA\.jsvu\bin\d8"
// "C:UsersSUDIP BHATTACHARYA.jsvind8"

// d8> d8
// {file: {read: function read() { [native code] }, execute: function execute() { 
    // [native code] }}, log: {getAndStop: function getAndStop() { [native code] }}, dom: 
    // {EventTarget: function EventTarget() { [native code] }, Div: function Div() { [native code] }}, 
    // test: {verifySourcePositions: function verifySourcePositions() { [native code] }, 
    // installConditionalFeatures: function installConditionalFeatures() { [native code] },
    //  enableJSPI: function enableJSPI() { [native code] }}, promise: {setHooks: function setHooks() 
    // { [native code] }}, debugger: {enable: function enable() { [native code] }, disable: function disable()
    //  { [native code] }}, serializer: {serialize: function serialize() { [native code] },
    //  deserialize: function deserialize() { [native code] }}, profiler: {setOnProfileEndListener:
    //  function setOnProfileEndListener() { [native code] }, triggerSample: function triggerSample()
    //  { [native code] }}, terminate: function terminate() { [native code] }, quit: function quit() { [native code] }}

// PS C:\Users\SUDIP BHATTACHARYA\Desktop\Backend\MISCELLANEOUS\Backend> cd ..
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\Backend\MISCELLANEOUS>
// cd "C:\Users\SUDIP BHATTACHARYA\Desktop\Backend\MISCELLANEOUS\Frontend"
// Object Oriented Programmimg 
/**
 * To strcuture our code
 * prototypes
 * New Operator
 * constructors
 * classes
 * Keywords(extends,super)
*/

// const { log } = require("console");
// const { memoryUsage } = require("process");

/**
 * Object Prototypes
 * Prototypes are the mainchanism by which Javscript objects inherit features from one another.
 * It is like a single template object that all objects inherit methods and properties from without having their own copy
 * 
 * arr.__proto(reference)
 * Array.prototype(acyual object)
 * String.prototype
 * 
 * Every object in js has a build-in property, which is called its prototype.
 * The prototype is itself an object, so the prototype will have its own prototype.
 * making what's called a protype chain. The chain when we reach a prototype that has null for its own prototype
 * 
 * 
 */

/**
 * everything is object in js
 * js is m,ade from c++
 */

// const stu1 = {
//     name: "adam",
//     age:25,
//     marks: 89,
//     subjects:{
//         english: 90,
//         Hindi: 80,
//         Computer_Application: 69.8,
//         Physical_Science: 82.2,
//         Mathametics: 43,
//         Social_Science: 59
//     }
// }

// let arr = [1,2,3];

// arr.sayhello =()=>{
//     console.log("Hello");
// }

// arr.push(4);

// console.log(arr[1]);
// console.log(arr.sayhello());

// arr.__proto__.push = (n) => {
//     console.log(`pushing number ${n}`);
// }// changed the defination of push

// arr.push(7);

// console.log(arr);

/*
 * "abc.toUpperCase === "xyz".toUpperCase
 * true
 * 
 */

// .__proto__ creates its copy so they are not in the same memory
// .prototype does create its own so they have same memory base.

// factory functions are normal function that creates objects

// function personmaker(name,age) {
//     const person ={
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi my name is ${name}`);
//         },
//         age: `Hi my age is ${age}`
//     }

//     return person;
// }



// let p1 = personmaker("Arin",25)
// console.log(p1);

// console.log( p1.talk());// has its own copy 

//contructors
// in contructors first letter of the name should be capital
// doesnt return anything

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }//objects are point to the same memory location

// Person.prototype.talk = function name(params) {
//     console.log(` Hey mates! my name is ${this.name}`);
// }

// let Person1 = new Person("anish",19);
// console.log(Person1);

// Person1.talk();


// New Operator
/**
 * The new operator lets devlopers create an instance of a user-defined
 * object type or of one of the built-in object types that has a constructor function
 * 
 */

/**
 * Classes
 * Classes are a template for creating objects
 * The constructor method is a special method of a class for creating and initializing an object instance of that class.
 */

// class Personalization{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     talk(){
//         console.log(`Hi my name is ${this.name} and my age is ${this.age}`);
//     }
// }

// const Personalization1 = new Personalization("mr sudip", 53);
// console.log(Personalization1);

// Personalization1.talk();

// Inheritance
// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes

// class Student extends Personalization{
//     constructor(name,age,marks){
//         super(name,age)
//         this.marks = marks
//     }

//     greet(){
//         console.log(`Hellow bradha! my name is ${this.name}`);
//     }


// }

// let s1 = new Student ("adin", 26,79)
// console.log(s1);

// s1.greet()

// s1.talk();



