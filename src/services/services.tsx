export const getAllPosts = async () => {
  const res = await fetch(`http://localhost:8080/api/posts`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
