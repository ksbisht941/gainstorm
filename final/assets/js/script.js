// GSAP Animation
gsap.from(".logo", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 10
});

gsap.from(".btn-action", {
  opacity: 0,
  duration: 1,
  delay: 3.2,
  y: 10
});


gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
  stagger: 0.2
});

gsap.from(".hero-title", {opacity: 0, duration: 1, delay: 1.6, y: 30});
gsap.from(".hero-descp", {opacity: 0, duration: 1, delay: 1.8, y: 30});
gsap.from(".hero-button", {opacity: 0, duration: 1, delay: 2.1, y: 30});
gsap.from(".hero-img", {opacity: 0, duration: 1, delay: 1.3, y: 30});

// Mousemove Animation
document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
}