import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./blogDetails.module.css";

const BlogDetails = () => {
  const [post, setPost] = useState();
  const router = useRouter();
  const slug = router?.query?.slug;

  useEffect(() => {
    const getPost = async (slug) => {
      const res = await fetch(`http://localhost:8080/api/posts/${slug}`, {
        cache: "no-store",
      });
      const data = await res.json();
      console.log(data);
      data?.id && setPost(data);
    };

    if (slug) getPost(slug);
  }, [slug]);

  return (
    <div className="w-[60%] mx-auto py-16">
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{post?.title}</h1>
            <div className={styles.user}>
              {post?.user?.image && (
                <div className={styles.userImageContainer}>
                  <img
                    src={post.user.image}
                    alt=""
                    fill
                    className={styles.avatar}
                  />
                </div>
              )}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{post?.user?.name}</span>
                <span className={styles.date}>
                  {post?.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
          </div>
          {post?.img && (
            <div className={styles.imageContainer}>
              <img src={post.img} alt="" fill className={styles.image} />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description}>{post?.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
