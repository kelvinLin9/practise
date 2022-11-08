const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box1",
    markers: true,
    start: 'top 35%',
    end: 'top 1%',
    scrub: true,
  },
})

tl.to('.box1', {
  top: 0,
  left: '50%',
  xPercent: '-50',
  // duration: 10,
  position: 'absolute',
}).to('.box1', {
  top: '100%',
  yPercent: '-100',
  // duration: 20,
  position: 'absolute',
})