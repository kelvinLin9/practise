const srollTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3", 
    pin: true, //重要！ pin需設為true
    markers: true,
    scrub: true,
  },
});

srollTL.to(".gate-left-1", { yPercent: "-100" });
srollTL.to(".gate-right-1", { yPercent: "100" }, "<");
srollTL.to(".gate-left-2", { yPercent: "-100" });
srollTL.to(".gate-right-2", { yPercent: "100" }, "<");