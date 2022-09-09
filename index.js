const myNav = document.getElementById("nav-bar");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 500 ||
    document.documentElement.scrollTop >= 500
  ) {
    myNav.classList.add("darling");
  } else {
    myNav.classList.remove("darling");
  }
};
