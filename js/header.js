const navigationIconMap = document.querySelector(".navigation__icon__map");
const navigationAddress = document.querySelector(".navigation__address");
const navigationIconCall = document.querySelector(".navigation__icon__call");
const navigationCall = document.querySelector(".navigation__call");

const openAddress = () => {
  navigationAddress.style.display = "flex";
};

const closeAddress = () => {
  navigationAddress.style.display = "none";
};

navigationIconMap.addEventListener("mouseover", () => {
  setTimeout(openAddress, 300);
});

navigationIconMap.addEventListener("mouseout", () => {
  setTimeout(closeAddress, 300);
});

const openCall = () => {
  navigationCall.style.display = "flex";
};

const closeCall = () => {
  navigationCall.style.display = "none";
};

navigationIconCall.addEventListener("mouseover", () => {
  setTimeout(openCall, 300);
});

navigationIconCall.addEventListener("mouseout", () => {
  setTimeout(closeCall, 300);
});
