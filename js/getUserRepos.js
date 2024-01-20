async function getUserRepos(username, page = 1, perpage = 10) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${perpage}&page=${page}`
    );
    if (!res.ok) return null;
    const repos = await res.json();
    return repos;
  } catch (error) {
    return error;
  }
}
