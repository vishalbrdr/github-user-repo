const loadingIcon = document.querySelector(".loader");

const loader = {
  start: () => {
    loadingIcon.classList.remove("hidden");
  },
  stop: () => {
    loadingIcon.classList.add("hidden");
  },
};
