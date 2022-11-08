gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.fromTo(
  ".cursor",
  0,
  {
    visibility: "hidden",
  },
  {
    visibility: "visible",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.3,
  }
);

function hide(element) {
  gsap.set(element, { opacity: 0, visibility: "hidden" });
}

function animated(element) {
  let x = 0;

  //依照條件設定x初始值
  if (element.classList.contains("from-left")) {
    x = -100;
  } else if (element.classList.contains("from-right")) {
    x = 100;
  }

  //設定元素初始值
  element.style.transform = `translate(${x}px, 0px)`;
  gsap.fromTo(
    element,
    { x: x, y: 0, opacity: 0, visibility: "hidden" },
    {
      duration: 1,
      delay: 0.2,
      x: 0,
      y: 0,
      visibility: "visible",
      opacity: "1",
      ease: "expo",
      overwrite: "auto",
    }
  );
}

gsap.utils.toArray(".animation-wrapper").forEach(element => {
  if (
    element.classList.contains("from-left") ||
    element.classList.contains("from-right")
  ) {
    hide(element);
    ScrollTrigger.create({
      trigger: element,
      markers: true,
      onEnter: function () {
        animated(element);
      },
      onEnterBack: function () {
        animated(element);
      },
      onLeave: function () {
        hide(element);
      },
    });
  }else if(element.classList.contains("typing")) {
    const typing1Content = "這裡是第一段";
    const typing2Content = "這裡是第二段";
    const typing3Content = "這裡是第三段";

    gsap.to(".typing1", {
      text: typing1Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".typing1",
        toggleActions: "play pause resume reset",
      },
    });

    gsap.to(".typing2", {
      text: typing2Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".typing2",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".typing3", {
      text: typing3Content,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".typing3",
        toggleActions: "play pause resume reset",
      },
    });
  }
})