import { useEffect, useState } from "react";

import styles from "./blogCardList.module.css";
import BlogCard from "../blogCard/BlogCard";

const BlogCardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const res = await fetch(`http://localhost:8080/api/posts`, {
        cache: "no-store",
      });
      const data = await res.json();
      console.log(data);
      setPosts(data);
    };

    getAllPosts();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        {posts.length !== 0 && posts?.map((item) => <BlogCard {...item} />)}
      </div>
    </div>
  );
};

export default BlogCardList;
