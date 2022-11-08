const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box1",
    markers: true,
    start: 'top 35%',
    end: 'top 1%',
    scrub: true,
  },
})

// 撰寫動畫屬性的感覺其實類似於在寫一般CSS
tl.to('.box1', {
  top: 0, // 距外層容器top 0px
  left: '50%', // 距外層容器left 50%
  xPercent: '-50', // translate(-50%, 0) 修正回來
  duration: 10, // 動畫持續時間之比例
  position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
}).to('.box1', {
  top: '100%',
  yPercent: '-100', // translate(0, -100%)
  duration: 20,
  position: 'absolute',
})