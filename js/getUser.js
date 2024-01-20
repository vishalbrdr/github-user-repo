async function getUser(username) {
  try {
    loader.start();
    const res = await fetch(`https://api.github.com/users/${username}`, {
      // headers: {
      //   Authorization:
      //     "Bearer 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",
      // },
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
