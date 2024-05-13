import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const cursor = new MouseFollower({
  stateDetection: {
    '-pointer': 'a, button, .mask',
    '-hidden': 'input',
    '-see-project': '.portfolio__slide'
  }
});

const menu = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');
const masks = document.querySelectorAll('.mask');
if (menu) {
  menu.addEventListener('click', (ev) => {
    nav.classList.add('open');
  });
  menuClose.addEventListener('click', (ev) => {
    nav.classList.remove('open');
  })
  masks.forEach((mask) => {
    mask.addEventListener('click', (ev) => {
      nav.classList.remove('open');
    })
  })
}

let btnAnim = () => {
  const tlMsgBtn = gsap.timeline({
    defaults: { duration: .25 },
    repeat: -1,
    repeatDelay: 3
  });
  tlMsgBtn.to('.button', { rotate: 5})
    .to('.button', { rotate: -5})
    .to('.button', { rotate: 5})
    .to('.button', { rotate: 0});
    return tlMsgBtn;
}
const tl = gsap.timeline({ defaults: { duration: 0.4 }});
tl.from('.header__logo', {
    opacity: 0,
    y: -50,
  }).from('.nav span', {
    opacity: 0,
    y: -50,
    stagger: 0.15,
  }).from(".main-page__welcome", {
    opacity: 0,
    y: 30,
  })
  .from(".main-page__span", {
    opacity: 0,
    y: 30,
  })
  .from(".main-page__name", {
    opacity: 0,
    y: 30,
  })
  .from(".main-page__position", {
    opacity: 0,
    y: 30,
  })
  .from(".profile img", {
    opacity: 0,
    scale: 0.5,
    y: 30,
    duration: 1.2,
  })
  .add(btnAnim);

  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.main-page__container', {
    scrollTrigger: {
      trigger: '.main-page',
      start: 'top top',
      scrub: true,
    },
    opacity: 0.2,
  });
  gsap.from('.technology-block', {
    scrollTrigger: {
      trigger: '.page__about',
      start: '-20 center',
      end: "+=400px",
      scrub: true,
    },
    opacity: 0,
    stagger: 0.8,
    duration: 1,
  });
  gsap.from('.footer-socials__item', {
    scrollTrigger: {
      trigger: '.page__contact',
      start: 'top center',
    },
    opacity: 0,
    stagger: 0.5,
    duration: 1,
  });

console.log("%c ".concat("Created with ❤️️ by Daria Veretyak", " "), "\n  padding: 3em 2em 3em 2em;\n  font-size: 12px;\n  font-weight: bold;\n  font-family: Trebuchet MS, -apple-system, BlinkMacSystemFont, Arial, sans-serif;\n");