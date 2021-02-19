const sr = ScrollReveal();

var top = {
  origin   : "top",
  distance : "200px",
  duration : 1500,
  scale    : 1.05,
};
var bottom = {
  origin   : "bottom",
  distance : "200px",
  duration : 1500,
  scale    : .9,
};
var left = {
  origin   : "left",
  distance : "500px",
  duration : 1200,
  interval: 100
};
var right = {
  origin   : "right",
  distance : "200px",
  duration : 1200,
};
var scaleUp = {
  distance : "200px",
  scale: 1,
  duration : 1600,
};
var footer = {
  origin   : "bottom",
  distance : "70px",
  scale: 1,
  duration : 1600,
  interval:100
};

sr.reveal("#landing_h1", left);
sr.reveal("#landing_h2", right);
sr.reveal(".button", bottom);
sr.reveal(".form__group", left);
sr.reveal(".footer__item", footer);
sr.reveal(".header__logo", footer);