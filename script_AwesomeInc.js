// nav bar selector
const nav = document.querySelector(".navbar_div_class");
// fade-in selector
const faders = document.querySelectorAll(".fade_in");
// drop down menu selector
const dropdownWrap = document.querySelector("#dropdown_allwraped_id");
const dropdownNav_tag = document.querySelector("#dropdown_nav_id");
// hamburger menu selector
const hamburgerButton = document.querySelector("#hanmberger_Button_id");
const hamburger_nav = document.querySelector("#hamburger_Nav_id");
const below_Nav_hamburger_wrapped = document.querySelector(
  "#below_Nav_hamburgerMenu_allwrapped_id"
);
// hidden Hamburger > dropdown button items
// 1
const hidden_Hamburger_dropdown_button1 = document.querySelector(
  "#hidden_Hamburger_dropdown_button_id1"
);
const dropdown_on_Hamburger_wrap1 = document.querySelector(
  "#dropdown_on_Hamburger_wrap_id1"
);
// 2
const hidden_Hamburger_dropdown_button2 = document.querySelector(
  "#hidden_Hamburger_dropdown_button_id2"
);
const dropdown_on_Hamburger_wrap2 = document.querySelector(
  "#dropdown_on_Hamburger_wrap_id2"
);
// 3
const hidden_Hamburger_dropdown_button3 = document.querySelector(
  "#hidden_Hamburger_dropdown_button_id3"
);
const dropdown_on_Hamburger_wrap3 = document.querySelector(
  "#dropdown_on_Hamburger_wrap_id3"
);
// 4
const hidden_Hamburger_dropdown_button4 = document.querySelector(
  "#hidden_Hamburger_dropdown_button_id4"
);
const dropdown_on_Hamburger_wrap4 = document.querySelector(
  "#dropdown_on_Hamburger_wrap_id4"
);
// 5
const hidden_Hamburger_dropdown_button5 = document.querySelector(
  "#hidden_Hamburger_dropdown_button_id5"
);
const dropdown_on_Hamburger_wrap5 = document.querySelector(
  "#dropdown_on_Hamburger_wrap_id5"
);
// all dropdown wrap array
const hamburgerDropdownAllWraps = [
  dropdown_on_Hamburger_wrap1,
  dropdown_on_Hamburger_wrap2,
  dropdown_on_Hamburger_wrap3,
  dropdown_on_Hamburger_wrap4,
  dropdown_on_Hamburger_wrap5,
];
// dropdown icon 1
const dropdownSpanicon1 = document.querySelector("#dropdown_Span_icon_id1");
// dropdown icon 2
const dropdownSpanicon2 = document.querySelector("#dropdown_Span_icon_id2");
// dropdown icon 3
const dropdownSpanicon3 = document.querySelector("#dropdown_Span_icon_id3");
// dropdown icon 4
const dropdownSpanicon4 = document.querySelector("#dropdown_Span_icon_id4");
// dropdown icon 5
const dropdownSpanicon5 = document.querySelector("#dropdown_Span_icon_id5");

//all dropdown Span Icons
const dropdownSpan_allIcons = [
  dropdownSpanicon1,
  dropdownSpanicon2,
  dropdownSpanicon3,
  dropdownSpanicon4,
  dropdownSpanicon5,
];

const headerWrap = document.querySelector("#header_div_id");

// hide header banner
window.addEventListener("scroll", function () {
  if (this.scrollY > 50) {
    headerWrap.classList.add("invisible");
    nav.classList.add("fixedTop");
    if (!below_Nav_hamburger_wrapped.classList.contains("invisible")) {
      below_Nav_hamburger_wrapped.classList.add("fixedTop2");
    }
  } else {
    headerWrap.classList.remove("invisible");
    nav.classList.remove("fixedTop");
    below_Nav_hamburger_wrapped.classList.remove("fixedTop2");
  }
});

// // move nav bar on top after header disapear
// window.addEventListener("scroll", function () {
//   if (this.scrollY > 50) {
//     nav.classList.add("fixedTop");

//   } else {
//     nav.classList.remove("fixedTop");

//   }
// });

// fade-in
const appearOptions = {
  threshold: 1,
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

// hamburger button event handler
hamburgerButton.addEventListener("click", (event) => {
  event.preventDefault();
  hamburger_nav.classList.toggle("invisible");
  below_Nav_hamburger_wrapped.classList.toggle("invisible");

  below_Nav_hamburger_wrapped.classList.toggle(
    "below_Nav_hamburgerMenu_allwrapped_style"
  );
  hamburger_nav.classList.toggle("hamburger_Nav_style");
});

//hidden dropdown items on Hamburger menu button event handler

// 1
hidden_Hamburger_dropdown_button1.addEventListener("click", (event) => {
  event.preventDefault();

  let current_Dropdown_wrap = dropdown_on_Hamburger_wrap1;
  current_Dropdown_wrap.classList.toggle("invisible");

  // toggle dropdown span icon
  dropdownSpanicon1.textContent =
    dropdownSpanicon1.textContent === "close" ? "add" : "close";

  //Check other dropdown menu, and if it's not invisible then collapse
  if (!current_Dropdown_wrap.classList.contains("invisible")) {
    for (let i = 0; i < hamburgerDropdownAllWraps.length; i++) {
      if (
        !hamburgerDropdownAllWraps[i].classList.contains("invisible") &&
        hamburgerDropdownAllWraps[i] != current_Dropdown_wrap
      ) {
        hamburgerDropdownAllWraps[i].classList.toggle("invisible");
        dropdownSpan_allIcons[i].textContent = "add";
      }
    }
  }
});
// 2
hidden_Hamburger_dropdown_button2.addEventListener("click", (event) => {
  event.preventDefault();
  let current_Dropdown_wrap = dropdown_on_Hamburger_wrap2;
  current_Dropdown_wrap.classList.toggle("invisible");

  dropdownSpanicon2.textContent =
    dropdownSpanicon2.textContent === "close" ? "add" : "close";

  //Check other dropdown menu, and if it's not invisible then collapse
  if (!current_Dropdown_wrap.classList.contains("invisible")) {
    for (let i = 0; i < hamburgerDropdownAllWraps.length; i++) {
      if (
        !hamburgerDropdownAllWraps[i].classList.contains("invisible") &&
        hamburgerDropdownAllWraps[i] != current_Dropdown_wrap
      ) {
        hamburgerDropdownAllWraps[i].classList.toggle("invisible");
        dropdownSpan_allIcons[i].textContent = "add";
      }
    }
  }
});
// 3
hidden_Hamburger_dropdown_button3.addEventListener("click", (event) => {
  event.preventDefault();
  let current_Dropdown_wrap = dropdown_on_Hamburger_wrap3;
  current_Dropdown_wrap.classList.toggle("invisible");

  // toggle dropdown span icon
  dropdownSpanicon3.textContent =
    dropdownSpanicon3.textContent === "close" ? "add" : "close";

  //Check other dropdown menu, and if it's not invisible then collapse
  if (!current_Dropdown_wrap.classList.contains("invisible")) {
    for (let i = 0; i < hamburgerDropdownAllWraps.length; i++) {
      if (
        !hamburgerDropdownAllWraps[i].classList.contains("invisible") &&
        hamburgerDropdownAllWraps[i] != current_Dropdown_wrap
      ) {
        hamburgerDropdownAllWraps[i].classList.toggle("invisible");
        dropdownSpan_allIcons[i].textContent = "add";
      }
    }
  }
});
// 4
hidden_Hamburger_dropdown_button4.addEventListener("click", (event) => {
  event.preventDefault();
  let current_Dropdown_wrap = dropdown_on_Hamburger_wrap4;
  current_Dropdown_wrap.classList.toggle("invisible");

  // toggle dropdown span icon
  dropdownSpanicon4.textContent =
    dropdownSpanicon4.textContent === "close" ? "add" : "close";

  //Check other dropdown menu, and if it's not invisible then collapse
  if (!current_Dropdown_wrap.classList.contains("invisible")) {
    for (let i = 0; i < hamburgerDropdownAllWraps.length; i++) {
      if (
        !hamburgerDropdownAllWraps[i].classList.contains("invisible") &&
        hamburgerDropdownAllWraps[i] != current_Dropdown_wrap
      ) {
        hamburgerDropdownAllWraps[i].classList.toggle("invisible");
        dropdownSpan_allIcons[i].textContent = "add";
      }
    }
  }
});
// 5
hidden_Hamburger_dropdown_button5.addEventListener("click", (event) => {
  event.preventDefault();
  let current_Dropdown_wrap = dropdown_on_Hamburger_wrap5;
  current_Dropdown_wrap.classList.toggle("invisible");

  // toggle dropdown span icon
  dropdownSpanicon5.textContent =
    dropdownSpanicon5.textContent === "close" ? "add" : "close";

  //Check other dropdown menu, and if it's not invisible then collapse
  if (!current_Dropdown_wrap.classList.contains("invisible")) {
    for (let i = 0; i < hamburgerDropdownAllWraps.length; i++) {
      if (
        !hamburgerDropdownAllWraps[i].classList.contains("invisible") &&
        hamburgerDropdownAllWraps[i] != current_Dropdown_wrap
      ) {
        hamburgerDropdownAllWraps[i].classList.toggle("invisible");
        dropdownSpan_allIcons[i].textContent = "add";
      }
    }
  }
});

// //resize detect
// let width = window.innerWidth;
// console.log(width);
// if (width > 1082) {
//   hamburger_nav.classlist.add("invisible");
//   below_Nav_hamburger_wrapped.classlist.add("invisible");
// }
// window.addEventListener("resize", function () {
//   let width = window.innerWidth;
//   console.log(width);
//   if (width > 1082) {
//     hamburger_nav.classlist.add("invisible");
//     below_Nav_hamburger_wrapped.classlist.add("invisible");
//   }
// });
