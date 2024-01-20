async function getUserRepos(username, page = 1, perpage = 10) {
  try {
    loader.start();
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${perpage}&page=${page}`,
      {
        headers: {
          Authorization: "Bearer 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",
        },
      }
    );
    if (!res.ok) return null;
    const repos = await res.json();
    loader.stop();
    return repos;
  } catch (error) {
    return error;
  }
}
