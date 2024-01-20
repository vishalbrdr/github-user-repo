async function getUser(username) {
  try {
    loader.start();
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: "Bearer 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",
      },
    });
    // if (!res.ok) return { user: null, error: true };
    const user = await res.json();
    console.log(user);
    loader.stop();
    return { user, error: null };
  } catch (error) {
    return error;
  }
}
