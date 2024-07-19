// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'), // Specify the body element for full-page scrolling
//     smooth: true,

// });

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

document.addEventListener("DOMContentLoaded", function () {
    var h1 = document.querySelector(".heading1 h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");
    var clutter = "";

    splittedText.forEach(function (e, idx) {
        var className = String.fromCharCode(97 + (idx % 26)); // 97 is the ASCII code for 'a'
        clutter += `<span class="${className}">${e}</span>`;
    });

    h1.innerHTML = clutter;
});
// The % 26 ensures that after 'z', it loops back to 'a'.

document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.querySelector(".cursor");

    var page1 = document.querySelector(".page1");

    page1.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY,
            duration: 1,
            ease: "back.out"
        });
    });

    page1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.6
        });
    });

    page1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,

        });
    });
});

// Wrapping each h4 element in .write with a span tag and adding incremental alphabet classes
// var h4Elements = document.querySelectorAll(".write h4");

// h4Elements.forEach(function(h4, idx) {
//     var className = String.fromCharCode(97 + (idx % 26)); // 97 is the ASCII code for 'a'
//     h4.outerHTML = `<span class="${className}">${h4.outerHTML}</span>`;
// });
// Function to animate page 2 elements
function page2A() {
    gsap.from(".write h4", {
        y: 120,
        stagger: 0.2,
        duration: 1,

        scrollTrigger: {

            trigger: ".page2",
            scroller: ".main",
            start: "top 47%",
            end: "top 46%",
            // markers: true,
            scrub: 2
        }
    });
}

// Call functions after DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    page2A();     // Initialize animations for page 2
});

var initialPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector(".main");

string.addEventListener("mousemove", function (dets) {
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 1,
        ease: "elastic.out(1,0.2)"
    })
})


string.addEventListener("mouseleave", function (dets) {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1,
        ease: "elastic.out(1,0.2)"
    })
})

// console.log("clicked");
// console.log(dets);
// console.log(dets.x);
// console.log(dets.y);
// https://gsap.com/docs/v3/Eases/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var tl = gsap.timeline()

tl.from(".loader h3",{
    x:80,
    opacity:0,
    duration:0.8,
    stagger:0.1
})

tl.to(".loader h3",{
    opacity:0,
    x: -40,
    stagger: -0.1,
    // duration:1
})

tl.to(".loader",{
    opacity:0,
    display:"none"
})

tl.from(".page1 .page1_content .heading1 h1 ",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    
})