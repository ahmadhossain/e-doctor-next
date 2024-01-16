import styles from "./blogCard.module.css";
import Link from "next/link";

const BlogCard = ({ img, title, desc, createdAt, slug }) => {
  return (
    <div className={styles.container}>
      {
        <div className={styles.imageContainer}>
          <img src={img} alt="" fill className={styles.image} />
        </div>
      }
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{createdAt.substring(0, 10)} </span>
        </div>
        <h3>{title}</h3>
        <div className={styles.desc}>{`${desc.substring(0, 200)}...`}</div>
        <Link href={`blog/${slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
