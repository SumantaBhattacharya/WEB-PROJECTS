// locomotive scrolltrigger codepen

// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });
function locomotive(params) {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotive();

function cursorAnimation() {
  var video_container = document.querySelector(".video_container");
  var playbtn = document.querySelector(".video_container .play");

  video_container.addEventListener("mousemove", function (dets) {
    // Calculate the position relative to the container
    var rect = video_container.getBoundingClientRect();
    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;

    gsap.to(playbtn, {
      x: x,
      y: y,
      duration: 0.3, // Reduced duration for smoother following
    });
  });

  video_container.addEventListener("mouseenter", function () {
    playbtn.innerHTML = "View More";
    gsap.to(playbtn, {
      scale: 3,
      duration: 0.6,
      opacity: 1,
      fontSize: "0.3vw",
    });
  });

  video_container.addEventListener("mouseleave", function () {
    playbtn.innerHTML = "";
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorAnimation();

gsap.from(".page1 h1", {
  y: 70,
  opacity: 0,
  delay: 0.2,
  duration: 0.4,
  stagger: 0.4,
});

gsap.from(".page1 .video_container", {
  scale: 0.9,
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 0.4,
});

document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.clientX,
      top: dets.clientY,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  var page4 = document.querySelector(".page4");
  if (page4) {
    var children = page4.querySelectorAll(".child");
    children.forEach(function (child) {
      child.addEventListener("mouseenter", function () {
        gsap.to(".cursor", {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      child.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }
});

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });

  gsap.to(".nav-part2 .links", {
    transform: "translateY(-200%)",
    opacity: 0,

    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  
}
navbarAnimation()