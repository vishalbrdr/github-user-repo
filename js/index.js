const main = document.querySelector("[data-main]");
const usernameForm = document.querySelector('[data-form="username"]');

usernameForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const username = usernameForm.username.value;
  const success = await init(username);
  if (success) {
    document
      .querySelector("[data-user-profile-container]")
      .removeChild(document.querySelector("[data-user-profile]"));
  }
});

async function init(username) {
  const { user, error } = await getUser(username);
  if (error) return false;
  setUserTemplate(user);
  const repos = await getUserRepos(username);
  setReposTepmplate(repos);
  return true;
  
}

init("vishalbrdr");
