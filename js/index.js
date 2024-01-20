const paginationContainer = document.querySelector("[data-pagination]");
const main = document.querySelector("[data-main]");
const usernameForm = document.querySelector('[data-form="username"]');
const pgBtns = document.querySelectorAll(".pagination-btn");
const numSelect = document.querySelector("select");
const noRepoPara = document.querySelector("[data-no-repo]");
const numRepo = document.querySelector("[data-num-repo]");
const errorPara = document.querySelector(".invaidUsername");

let PAGE = 1;
let PER_PAGE = 10;
let NUMBER_OF_PAGES = 1;
let USERNAME = "vishalbrdr";
let USER = null;

numSelect.value = PER_PAGE;

numSelect.addEventListener("change", async (e) => {
  PER_PAGE = e.target.value;
  PAGE = 1;
  const repos = await getUserRepos(USERNAME, PAGE, PER_PAGE);
  setReposTepmplate(repos);
  paginationInit(USER);
});

usernameForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  USERNAME = usernameForm.username.value;
  const success = await init();
  if (success) {
    document
      .querySelector("[data-user-profile-container]")
      .removeChild(document.querySelector("[data-user-profile]"));
  }
});

async function init() {
  const { user } = await getUser(USERNAME);
  if (user.message) {
    main.classList.add("hidden");
    errorPara.classList.remove("hidden");
    return false;
  }
  errorPara.classList.add("hidden");
  main.classList.remove("hidden");
  USER = user;
  setUserTemplate(user);
  const repos = await getUserRepos(USERNAME, PAGE, PER_PAGE);
  setReposTepmplate(repos);

  // pagination init
  paginationInit(user);

  return true;
}

function paginationInit(user) {
  const numOfPublicRepo = user.public_repos;
  if (numOfPublicRepo === 0) {
    pgBtns.forEach((btn) => btn.classList.add("hidden"));
    numRepo.classList.add("hidden");
    noRepoPara.classList.remove("hidden");
    let prevchild = paginationContainer.lastElementChild;
    while (prevchild) {
      paginationContainer.removeChild(prevchild);
      prevchild = paginationContainer.lastElementChild;
    }
    return;
  }
  pgBtns.forEach((btn) => btn.classList.remove("hidden"));
  numRepo.classList.remove("hidden");
  noRepoPara.classList.add("hidden");
  NUMBER_OF_PAGES = Math.ceil(numOfPublicRepo / PER_PAGE);
  let prevchild = paginationContainer.lastElementChild;
  while (prevchild) {
    paginationContainer.removeChild(prevchild);
    prevchild = paginationContainer.lastElementChild;
  }
  for (let i = 1; i <= NUMBER_OF_PAGES; i++) {
    const btn = document.createElement("button");
    btn.classList.add("pagination-btn-num");
    if (i === PAGE) btn.classList.add("active");
    btn.innerText = i;
    btn.addEventListener("click", handlePagination);
    paginationContainer.appendChild(btn);
  }
}

pgBtns.forEach((btn) => {
  btn.addEventListener("click", handlePagination);
});

async function handlePagination(e) {
  if (e.target.textContent === "PREV") {
    if (PAGE === 1) {
      return;
    }
    PAGE -= 1;
  } else if (e.target.textContent === "NEXT") {
    if (PAGE === NUMBER_OF_PAGES) {
      return;
    }
    PAGE += 1;
  } else {
    PAGE = parseInt(e.target.textContent);
  }

  const repos = await getUserRepos(USERNAME, PAGE, PER_PAGE);
  setReposTepmplate(repos);

  const allBtns = document.querySelectorAll(".pagination-btn-num");
  allBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (PAGE == btn.textContent) {
      btn.classList.add("active");
    }
  });

  // const activeBtn = document.querySelector(".pagination-btn.active");
  // activeBtn.classList.remove("active");
  // e.target.classList.add("active");
}

init();
