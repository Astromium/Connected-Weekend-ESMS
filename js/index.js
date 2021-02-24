window.onload = setTimeout(() => {
  const hamburger = document.querySelector(".menu");
  const hamburgerLines = document.querySelectorAll(".menu line");
  const navOpen = document.querySelector(".nav-open");
  const logo = document.querySelector(".logo");
  const home = document.querySelector(".home");
  const about = document.querySelector(".about-menu");
  const agenda = document.querySelector(".agenda-menu");
  const register = document.querySelector(".register");
  const speakersMenu = document.querySelector(".speakers-menu");
  const faqMenu = document.querySelector(".faq-menu");

  const chevron1 = document.getElementById("chevron-1");
  const answer1 = document.getElementById("answer1");
  const chevron2 = document.getElementById("chevron-2");
  const answer2 = document.getElementById("answer2");
  const chevron3 = document.getElementById("chevron-3");
  const answer3 = document.getElementById("answer3");

  /* menu animations */
  const tl1 = new TimelineMax({ paused: true, reversed: true });

  tl1
    .to(navOpen, 0.5, { x: 0 })
    .fromTo(home, 0.5, { opacity: 0, x: 10 }, { opacity: 1, x: 0 }, "-=0.3")
    .fromTo(about, 0.5, { opacity: 0, x: 10 }, { opacity: 1, x: 0 }, "-=0.3")
    .fromTo(
      speakersMenu,
      0.5,
      { opacity: 0, x: 10 },
      { opacity: 1, x: 0 },
      "-=0.3"
    )
    .fromTo(agenda, 0.5, { opacity: 0, x: 10 }, { opacity: 1, x: 0 }, "-=0.3")
    .fromTo(faqMenu, 0.5, { opacity: 0, x: 10 }, { opacity: 1, x: 0 }, "-=0.3")
    .fromTo(
      register,
      0.5,
      { opacity: 0, x: 10 },
      { opacity: 1, x: 0 },
      "-=0.3"
    );

  hamburger.addEventListener("click", () => {
    tl1.reversed() ? tl1.play() : tl1.reverse();
  });

  /* faq animations */
  const faq1 = new TimelineMax({ paused: true, reversed: true });

  faq1
    .to(chevron1, 0.2, { rotate: "180deg" })
    .to(answer1, 0.2, { display: "block", opacity: 1 }, "-=0.1");

  chevron1.addEventListener("click", () => {
    faq1.reversed() ? faq1.play() : faq1.reverse();
  });

  const faq2 = new TimelineMax({ paused: true, reversed: true });

  faq2
    .to(chevron2, 0.2, { rotate: "180deg" })
    .to(answer2, 0.2, { display: "block", opacity: 1 }, "-=0.1");

  chevron2.addEventListener("click", () => {
    faq2.reversed() ? faq2.play() : faq2.reverse();
  });

  const faq3 = new TimelineMax({ paused: true, reversed: true });

  faq3
    .to(chevron3, 0.2, { rotate: "180deg" })
    .to(answer3, 0.2, { display: "block", opacity: 1 }, "-=0.1");

  chevron3.addEventListener("click", () => {
    faq3.reversed() ? faq3.play() : faq3.reverse();
  });

  /* initial animation */

  const start = gsap.timeline({
    defaults: {
      ease: "power1.out",
    },
  });

  start.to(".slider1", {
    y: "-100%",
    duration: 1,
    delay: 0.8,
  });

  start.to(
    ".text",
    {
      y: "0%",
      duration: 1,
      stagger: 0.25,
    },
    "-=0.8"
  );

  start.to(
    ".intro",
    {
      x: "-100%",
      duration: 1,
      delay: 0.5,
    },
    "-=0.5"
  );

  start.fromTo(
    ".nav",
    { opacity: 0, translateY: "-20%" },
    { opacity: 1, translateY: "0%", duration: 0.5, stagger: 0.25 },
    "-=0.3"
  );

  start.fromTo(
    ".main-slider",
    { opacity: 0, scaleX: 0, transformOrigin: "center" },
    { opacity: 1, scaleX: 1, duration: 0.5 }
  );

  start.fromTo(
    ".anim-right",
    { opacity: 0, translateX: "-50%" },
    { opacity: 1, translateX: "0%", duration: 0.5, stagger: 0.25 }
  );

  start.fromTo(
    ".lottie",
    { opacity: 0, scale: 0, transformOrigin: "center" },
    { opacity: 1, scale: 1, duration: 0.5 }
  );

  start.fromTo(
    ".anim-up",
    { opacity: 0, translateY: "50%" },
    { opacity: 1, translateY: "0%", duration: 1 },
    "-=1.5"
  );

  // agenda timeline
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".agenda-section",
      start: "top center",
    },
  });

  // speakers timeline
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".speaker",
      start: "center bottom",
    },
  });

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".event-desc",
      start: "center bottom",
    },
  });

  tl2
    .from(".rectangle", { width: 0, opacity: 0, duration: 0.6 })
    .from(
      ".agenda-content",
      { scaleY: 0, opacity: 0, duration: 0.5, transformOrigin: "bottom" },
      "-=0.3"
    )
    .from(".number", { y: -20, opacity: 0, duration: 0.5 })
    .from(".line", { x: "100%", opacity: 0, duration: 0.3 })
    .from(".circle", { y: 20, opacity: 0, duration: 0.3 })
    .from(".time", { x: -20, opacity: 0, duration: 0.3 });

  tl3
    .from(".speaker-top", {
      scaleX: 0,
      opacity: 0,
      duration: 0.8,
      transformOrigin: "left",
    })
    .from(
      ".speaker-bottom",
      { scaleX: 0, opacity: 0, duration: 0.8, transformOrigin: "left" },
      "-=0.7"
    )
    .from(
      ".speaker-left",
      { scaleY: 0, opacity: 0, duration: 0.8, transformOrigin: "top" },
      "-=0.7"
    )
    .from(
      ".speaker-right",
      { scaleY: 0, opacity: 0, duration: 0.8, transformOrigin: "top" },
      "-=0.7"
    )
    .from(".speaker-img", { opacity: 0, duration: 0.8 }, "-=0.5")
    .from(".speaker-name", { x: -20, opacity: 0, duration: 0.4 })
    .from(".role", { x: -20, opacity: 0, duration: 0.4 })
    .from(".speaker-info", { y: 20, opacity: 0, duration: 0.8 }, "-=0.2");

  tl4
    .from(".video", { opacity: 0, y: -20, duration: 0.5 })
    .from(".horizontal", { width: 0, duration: 1 })
    .from(".vertical", { height: 0, duration: 1 }, "-=0.8")
    .from(".border-circle", { x: 10, opacity: 0, duration: 0.2 })
    .from(
      ".animated-blob",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 0.5 }
    );

  //document.querySelector(".container").style.display = "none";

  /* menu animations */
}, 2000);
