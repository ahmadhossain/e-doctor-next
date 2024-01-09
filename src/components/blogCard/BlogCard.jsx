import Image from "next/image";
import styles from "./blogCard.module.css";
import Link from "next/link";

const Card = ({ img, title, desc }) => {
  return (
    <div className={styles.container}>
      {
        <div className={styles.imageContainer}>
          <img src={img} alt="" fill className={styles.image} />
        </div>
      }
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {/* {item.createdAt.substring(0, 10)} -{" "} */}
          </span>
          {/* <span className={styles.category}>{item.catSlug}</span> */}
        </div>
        {/* <Link href={`/posts/${item.slug}`}> */}
        <h3>{title}</h3>
        {/* </Link> */}
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          className={styles.desc}
          //   dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        >
          {desc}
        </div>
        <Link href={`/posts/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
