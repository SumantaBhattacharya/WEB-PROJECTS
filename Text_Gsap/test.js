window.addEventListener("wheel", function(dets) {
    if (dets.deltaY > 0) {
        gsap.to(".marque", {
            x: "-200%", // Corrected transform property
            repeat: -1,
            duration: 4,
            ease: "none",
            willChange: "transform", // Added will-change property
        });

        gsap.to(".marque img",{
            rotate:180
        })

    } else {
        gsap.to(".marque", {
            x: "0%", // Corrected transform property
            repeat: -1,
            duration: 4,
            ease: "none",
            willChange: "transform", // Added will-change property 
        });

        gsap.to(".marque img",{
            rotate:0
        })
    }
});