// NAVIGATION
const navMenu = gsap.timeline({ paused: true });
gsap.defaults({ ease: "power3.inOut" });

navMenu.to("#menu", { y: "0%" });
navMenu.to("[class=menu-button_line]", { scaleX: 0, opacity: 0 }, 0);
navMenu.to(".menu-button_line.middle", { rotation: 45 }, 0);
navMenu.to(".menu-button_line.middle div", { rotation: -90 }, 0);

const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", () => {
  if (navMenu.reversed() || navMenu.paused()) {
    navMenu.play();
  } else {
    navMenu.reverse();
  }
});


// Animate in .big-link_item sitewide
const bigLinks = gsap.timeline();
bigLinks.from(
  [".big-link_item"],
  { y: "100%", opacity: "0%", ease: "expo.inOut", stagger: { amount: 0.75 } }
);
