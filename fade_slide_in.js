// fade-in selector
const faders = document.querySelectorAll(".fade_in");
// slider selector
const slider = document.querySelectorAll(".slide_in");

//fade-in & slide-in animation: https://youtu.be/huVJW23JHKQ?si=vNNTwnCTE_rsY0C1
// fade-in animation
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add(`appear`);
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
// slide-in animation
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
