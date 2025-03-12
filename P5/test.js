// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'), // Specify the body element for full-page scrolling
//     smooth: true,
//     // Other options if needed
// });
function page_1() {
    var tl = gsap.timeline()

    tl.from("nav,nav ul,nav ul li, nav button", {
        y: -30,
        duration: 0.7,
        // delay:1,
        opacity: 0,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -400,
        opacity: 0,
        duration: 0.6
    })
    tl.from(".center-part1 p", {
        x: -400,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.5
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5,
        // x:200
    }, "-=1")

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6
    })

}

page_1()

// gsap.from(".services h3", {
//     x: -100,
//     opacity: 0,
//     duration: 0.5,
//     scrollTrigger: {
//         trigger: ".services h3",
//         scroller: "body",
//         markers: true,
//         start:"top 50%"
//     }
// });

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top -60",
        scrub: 2
    }
});

tl.from(".services", {
    x: -950,
    // opacity:0
    duration:0.5
});



// const elems = document.querySelectorAll('.elem');

// elems.forEach(elem => {
//     gsap.from(elem, {
//         x: -950,
//         opacity: 0,
//         duration: 1, // Animation duration in seconds
//         ease: 'power3.out', // Easing function
//         stagger: 0.15,
//         scrollTrigger: {
//             trigger: elem,
//             start: 'top 80%', // Animation starts when 80% of the element is in view
//         },
//     });
// });


tl.from("#left", {
    x: -300,
    opacity: 0,
    duration: 1, // Animation duration in seconds
},"anim");
tl.from("#right", {
    x: 300,
    opacity: 0,
    duration: 1, // Animation duration in seconds
},"anim");
tl.from("#left_", {
    x: -300,
    opacity: 0,
    duration: 1, // Animation duration in seconds
},"anime");
tl.from("#right_", {
    x: 300,
    opacity: 0,
    duration: 1, // Animation duration in seconds
},"anime");





