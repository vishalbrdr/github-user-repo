function setUserTemplate(user) {
  const userProfileTemplate = document.querySelector(
    '[data-template="user-profile"]'
  );
  const userProfile = userProfileTemplate.content.cloneNode(true);

  const {
    login,
    name,
    location,
    avatar_url,
    twitter_username,
    bio,
    company,
    html_url,
    created_at,
  } = user;
  userProfile.querySelector("[data-user-name]").innerText = "@" + login;
  userProfile.querySelector("[data-user-fullname]").innerText = name || login;
  userProfile.querySelector("[data-user-location]").innerText =
    location || "Not Available";
  userProfile.querySelectorAll("[data-user-image]").forEach((img) => {
    img.src = avatar_url;
  });
  userProfile.querySelector("[data-user-joined]").innerText =
    "Joined " + formatDate(created_at.split("T")[0]);
  const twitterLinkTemplate = userProfile.querySelector("[data-user-twitter]");
  if (!twitter_username) twitterLinkTemplate.classList.add("translucent");
  twitterLinkTemplate.href = twitter_username
    ? `https://twitter.com/${twitter_username}`
    : "";
  userProfile.querySelector("[data-user-twitter-text]").innerText =
    twitter_username ? "@" + twitter_username : "Not Available";

  const bioTemplate = userProfile.querySelector("[data-user-bio]");
  if (!bio) bioTemplate.classList.add("translucent");
  bioTemplate.innerText = bio || "This profile has no bio";

  const companyTemplate = userProfile.querySelector("[data-company]");
  if (!company) companyTemplate.classList.add("translucent");
  userProfile.querySelector("[data-company-text]").innerText = company
    ? company
    : "Not Available";

  userProfile.querySelector("[data-user-link]").href = html_url;
  userProfile.querySelector("[data-user-link-text]").innerText =
    html_url.split("https://")[1];

  document
    .querySelector("[data-user-profile-container]")
    .appendChild(userProfile);
}
