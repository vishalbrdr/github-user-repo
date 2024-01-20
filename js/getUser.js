async function getUser(username) {
  try {
    loader.start();
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) return { user: null, error: true };
    const user = await res.json();
    loader.end();
    return { user, error: null };
  } catch (error) {
    return error;
  }
}
