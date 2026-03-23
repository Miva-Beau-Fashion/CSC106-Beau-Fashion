document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.getElementById("marquee");
    const content = marquee.querySelector(".marquee-content");

    if (!marquee || !content) return;

    // Clone the content to create a seamless loop
    marquee.appendChild(content.cloneNode(true));
    marquee.appendChild(content.cloneNode(true)); // additional clone for extra wide screens

    let contentWidth = content.offsetWidth;

    // Recalculate width on window resize
    window.addEventListener("resize", () => {
        contentWidth = content.offsetWidth;
    });

    let currentPos = 0;
    const speed = 1.5; // Controls the scrolling speed

    function animate() {
        currentPos -= speed;

        // Reset position when one full block of the content has scrolled past
        if (Math.abs(currentPos) >= contentWidth) {
            currentPos = 0;
        }

        marquee.style.transform = `translateX(${currentPos}px)`;
        requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
});
