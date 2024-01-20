async function getUserRepos(username, page = 1, perpage = 10) {
  try {
    loader.start();
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${perpage}&page=${page}`,
      // {
      //   headers: {
      //     Authorization:
      //       "Bearer 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",
      //   },
      // }
    );
    if (!res.ok) return null;
    const repos = await res.json();
    loader.stop();
    return repos;
  } catch (error) {
    return error;
  }
}
