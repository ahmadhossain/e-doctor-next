import styles from "./blogCardList.module.css";
// import Pagination from "../pagination/Pagination";
import Card from "../blogCard/BlogCard";

// const getData = async (page, cat) => {
//   const res = await fetch(
//     `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };
const posts = [
  {
    img: "https://www.narayanahealth.org/blog/wp-content/uploads/2019/03/shutterstock_1343136929.jpg",
    title: "EARLY WARNING SIGNS OF KIDNEY DISEASE",
    desc: `Millions of people are living with various types of kidney diseases and most of them don’t even have the faintest idea about it. This is why kidney disease is often known as a ‘Silent Killer’ as most people do not feel any difference until the disease is advanced. While people get their blood pressure, sugar and cholesterol levels checked on a regular basis, they fail to get a simple creatinine test done in their blood, to detect any unidentified kidney problems.`,
    slug: "",
  },
  {
    img: "https://17xpvwx1p0y4h.cdn.shift8web.com/wp-content/uploads/BackLiver-e1564032287574-552x314.png",
    title: "Symptoms of liver disease",
    desc: `Liver problems develop silently with no obvious symptoms in the early
          stages yet the disease is largely preventable through lifestyle
          changes...
        `,
    slug: "",
  },
];

const BlogCardList = () => {
  // const { posts, count } = await getData(page, cat);

  // const POST_PER_PAGE = 2;

  // const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card {...item} />
        ))}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default BlogCardList;
