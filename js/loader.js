const loadingIcon = document.querySelector(".loader");

const loader = {
  start: () => {
    loadingIcon.classList.remove("hidden");
  },
  end: () => {
    loadingIcon.classList.add("hidden");
  },
};
