// 文字範例
gsap.to('.cursor', {opacity:0, duration:1, repeat: -1})

// 方塊移動範例
gsap.to('.box1', {x: 100, duration:1,})
gsap.to('.box1', {y: 100, duration:1, delay:1})

gsap.from('.box2', {x: 200, opacity:0 ,duration:1})

// 方塊漸明範例
gsap.fromTo('.box3', {autoAlpha: 0.3}, {autoAlpha: 1, duration: 1, repeat: -1})

// timeline
const timeline = gsap.timeline()
timeline.to('.box4', {x: 100, duration:1}).to('.box4', {y: 100, duration:1}, "<")

// timeline位置參數
const timeline2 = gsap.timeline()
timeline.to('.box5', {x: 100, duration:1}).to('.box6', {x: 100, duration:1}, "<")