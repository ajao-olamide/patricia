const myNav = document.getElementById("nav-bar");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    myNav.classList.add("darling");
  } else {
    myNav.classList.remove("darling");
  }
};
