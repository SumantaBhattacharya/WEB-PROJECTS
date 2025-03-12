// key press -> button flash(lvl 1) 
// -> users press button -> matching between user press button and key -> if(match){next lvl}else{game over}

let gameSeq = [];
let userSeq = [];

let started = false;
let lvl = 0;

let btns = ["yellow", "red", "green", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        // console.log("iuuerlokre");
        started = true;

        lvlUp();
    }
})

function btnflash(btn) {//gameflash
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250);
}

function lvlUp(params) {
    // userSeq = [];
    lvl++;
    h2.innerHTML = ` <h2>The game has stated, Your level is ${lvl}</h2>`

    let randomIdx = Math.floor(Math.random() * 4)
    let randomColor = btns[randomIdx]
    let randomBtn = document.querySelector(`#${randomColor}`)
    // console.log(randomBtn);
    // console.log(randomIdx);
    // console.log(randomColor);
    gameSeq.push(randomColor)
    btnflash(randomBtn)
}


function checkMatch(id) {
    
    if (userSeq[id] === gameSeq[id]) { //if(userSeq.length) === gameSeq.length)❌ or if(userSeq) === gameSeq)❎
        if(userSeq.length == gameSeq.length){
            setTimeout(lvlUp,1000);
            
            userSeq = [];
        }

    } else {
        h2.innerHTML = `<h2>The game has ended, <br> Your current level ${lvl} is 0</h2>`;
        started = false; // Game over, reset game state
        var body = document.querySelector("body");
        body.style.backgroundColor = "red"
        setTimeout(function(){
            body.style.backgroundColor = "#313131"
        },150)
        lvl = 0;
        gameSeq = [];
        userSeq = [];
    }
}

function btnPress() {
    if (started == true) {
        let btn = this;
        userflash(btn);

        // console.log(this);


        userColor = btn.getAttribute("id")
        // console.log(userColor);
        userSeq.push(userColor)
        checkMatch(userSeq.length -1);
    }


}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// function checkMatch() {
//     if (userSeq.length === gameSeq.length) { // Check if user input length matches game sequence length
//         let match = true;
//         for (let i = 0; i < userSeq.length; i++) {
//             if (userSeq[i] !== gameSeq[i]) {
//                 match = false;
//                 break; // Exit the loop as soon as a mismatch is found
//             }
//         }

//         if (match) {
//             setTimeout(function () {
//                 lvlUp();
//                 userSeq = []; // Reset user input sequence
//             }, 1000);
//         } else {
//             h2.innerHTML = `<h2>The game has ended, Your current level is 0</h2>`;
//             started = false; // Game over, reset game state
//             lvl = 0;
//             gameSeq = [];
//             userSeq = [];
//         }
//     }
// }

// userSeq[id] === gameSeq[id]: This comparison checks if the element at index id in userSeq is equal to the element at the same index in gameSeq. This works correctly for comparing individual elements of two arrays.
// if(userSeq.length === gameSeq.length): This comparison checks if the lengths of userSeq and gameSeq are equal. However, if userSeq or gameSeq is an empty array ([]), this comparison will evaluate to true because an empty array is considered a truthy value in JavaScript. So, this condition doesn't accurately check if the arrays have the same elements in the same order.
// if(userSeq === gameSeq): This comparison checks if userSeq and gameSeq reference the same array object. If they are different arrays with the same elements, this comparison will evaluate to false because they are separate objects in memory, even if they contain identical elements.
