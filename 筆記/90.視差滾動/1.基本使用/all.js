gsap.registerPlugin(ScrollTrigger, TextPlugin)

gsap.to(".loop", {
  xPercent: "-50", 
  ease: "none",
  duration: 5,
  repeat: -1,
});

gsap.to('.box1', {x: 100, duration:1,})
gsap.to('.box1', {y: 100, duration:1, delay: 1})
gsap.from('.box1', {x: 200, opacity:0 ,duration:1})
// 方塊漸明範例
gsap.fromTo('.box2', {autoAlpha: 0.3}, {autoAlpha: 1, duration: 1, repeat: -1})