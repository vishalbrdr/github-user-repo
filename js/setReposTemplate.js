function setReposTepmplate(repos) {
  const reposContainer = document.querySelector("[data-user-repos-container]");
  const userReposTemplate = document.querySelector('[data-template="repo"]');

  let prevchild = reposContainer.lastElementChild;
  while (prevchild) {
    reposContainer.removeChild(prevchild);
    prevchild = reposContainer.lastElementChild;
  }

  repos.forEach((repo) => {
    const userRepo = userReposTemplate.content.cloneNode(true);

    userRepo.querySelector("[data-repo-heading]").innerText = repo.name;

    userRepo.querySelector("[data-repo-desc]").innerText =
      repo.description || "No description";

    if (repo.topics.length === 0) {
      userRepo.querySelector("ul").innerText = "No topics";
    } else {
      repo.topics.forEach((topic, i) => {
        const listItem = document.createElement("li");
        listItem.innerText = topic;
        listItem.classList.add("topic");
        userRepo.querySelector("ul").appendChild(listItem);
      });
    }

    reposContainer.appendChild(userRepo);
  });
}
