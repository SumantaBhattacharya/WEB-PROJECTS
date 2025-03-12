/*
// var h1 = document.querySelector("h1").textContent
var h1 = document.querySelector("h1")
var h1_Text = h1.textContent
// var h1_Tex = h1.innerHTML
// console.log(h1_Tex);
// console.log(h1_Text);

var splittedText = h1_Text.split("")

var clutter = ""

splittedText.forEach(function(e){
    // clutter = clutter + e
    // clutter += e
    clutter = clutter + `<span>${e}</span>`
})

// console.log(clutter);

h1.innerHTML = clutter


gsap.from("h1 span",{
    y:60, //transform translate y 100px
    opacity:0,
    duration:0.8,
    delay: 0.5,
    stagger:-0.3,

})

*/

// var h1 = document.querySelector("h1").textContent
var h1 = document.querySelector("h1")
var h1_Text = h1.textContent
// var h1_Tex = h1.innerHTML
// console.log(h1_Tex);
// console.log(h1_Text);

var splittedText = h1_Text.split("")
//var halfvalue = Math.floor(splittedText.length/2)

var clutter = ""

splittedText.forEach(function(e,idx){
    // clutter = clutter + e
    // clutter += e
    //clutter = clutter + `<span class="a">${e}</span>` 0(s) < 4.5 = s | 1(h) < 4.5 = h | 2(e) < 4.5 = 3 | 3(r) < 4.5 = r| 4(y) < 4.5 = y  
    if(idx<(splittedText.length/2)){
        clutter  = clutter + `<span class="a">${e}</span>`
    }else{
        clutter  = clutter + `<span class="b">${e}</span>` // 5(i) < 4.5 = i | 6(a) < 4.5 = a | 7(n) < 4.5 = n | 8(s) < 4.5 = s   
    }
})

// console.log(clutter);

h1.innerHTML = clutter


gsap.from("h1 .a",{
    y:50, //transform translate y 100px
    opacity:0,
    duration:0.8,
    delay: 0.5,
    stagger:0.3,
    // stagger:{
    //     amount: 3,
    //     from:"center"
    // }, 
})

gsap.from("h1 .b",{
    y:50, //transform translate y 100px
    opacity:0,
    duration:0.8,
    delay: 0.5,
    stagger:-0.3,

})