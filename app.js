const links = document.querySelectorAll("a");
const flower = document.querySelector(".js-block");
const minWidth = 700;

gsap.set(flower, {
  xPercent: -40,
  yPercent: -40,
  opacity: 0,
});

const pos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
const mouse = { x: 0, y: 0 };
const speed = 0.1;
const fpms = 60 / 1000;
const xSet = gsap.quickSetter(flower, "x", "px");
const ySet = gsap.quickSetter(flower, "y", "px");

links.forEach(i => {
  i.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
    gsap.to(flower, { opacity: 1 });
  });
  i.addEventListener("mouseleave", e => {
    gsap.to(flower, { opacity: 0 });
  });
});

gsap.ticker.add((time, deltaTime) => {
  if (window.innerWidth > minWidth) {
    const delta = deltaTime * fpms;
    const dt = 1.0 - Math.pow(1.0 - speed, delta);

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;

    xSet(pos.x);
    ySet(pos.y);
  }
});
