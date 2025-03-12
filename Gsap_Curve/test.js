var initialPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector(".main");

string.addEventListener("mousemove",function(dets){
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:1,
        ease:"elastic.out(1,0.2)"
    })
})


string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1,
        ease:"elastic.out(1,0.2)"
    })
})

    // console.log("clicked");
    // console.log(dets);
    // console.log(dets.x);
    // console.log(dets.y);
    // https://gsap.com/docs/v3/Eases/

