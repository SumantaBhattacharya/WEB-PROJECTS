var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
// var body = document.querySelector("body");
var imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,// x-50
        y: dets.y,
        duration: 1,
        ease:"back.out"
    });
});

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:3,
        backgroundColor: "#ffffff8a",
        duration:0.6
    })
})
imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "#fff"
    })
})
