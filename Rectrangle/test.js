const center = document.querySelector(".center");

        center.addEventListener("mousemove", (e) => {
            const rect = center.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const middle = rect.width / 2;

            if (mouseX < middle) {
                const redIntensity = gsap.utils.mapRange(0, middle, 255, 0, mouseX);
                gsap.to(center, {
                    backgroundColor: `rgb(${redIntensity}, 0, 0)`,
                    ease: "power4.out",
                    duration: 1
                });
            } else {
                const blueIntensity = gsap.utils.mapRange(middle, rect.width, 0, 255, mouseX);
                gsap.to(center, {
                    backgroundColor: `rgb(0, 0, ${blueIntensity})`,
                    ease: "power4.out",
                    duration: 1
                });
            }
        });

        center.addEventListener("mouseenter", () => {
            gsap.to(center, { backgroundColor: 'rgb(255, 255, 255)', duration: 1 });
        });

        center.addEventListener("mouseleave", () => {
            gsap.to(center, { backgroundColor: 'rgb(255, 255, 255)', duration: 1 });
        });