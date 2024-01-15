// import Menu from "@/components/Menu/Menu";
import styles from "./blogDetails.module.css";
import Image from "next/image";
import photo from "../../../../public/images/p1.jpg";
// import Comments from "@/components/comments/Comments";

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const BlogDetails = () => {
  //   const { slug } = params;

  //   const data = await getData(slug);

  return (
    <div className="w-[60%] mx-auto py-16">
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <div className={styles.user}>
              {/* {data?.user?.image && ( */}
              <div className={styles.userImageContainer}>
                <Image src={photo} alt="" fill className={styles.avatar} />
              </div>
              {/* )} */}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>01.01.2024</span>
              </div>
            </div>
          </div>
          {/* {data?.img && ( */}
          <div className={styles.imageContainer}>
            <Image src={photo} alt="" fill className={styles.image} />
          </div>
          {/* )} */}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Egestas maecenas pharetra convallis posuere morbi. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Eget duis at tellus at urna. Consequat interdum varius sit amet mattis vulputate. Elementum sagittis vitae et leo duis ut diam quam. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Enim diam vulputate ut pharetra sit amet aliquam. Mattis aliquam faucibus purus in massa tempor nec. Purus sit amet luctus venenatis lectus. Aliquam eleifend mi in nulla posuere. Quam pellentesque nec nam aliquam sem et tortor. Nulla pharetra diam sit amet nisl. Volutpat maecenas volutpat blandit aliquam. Amet nisl suscipit adipiscing bibendum est ultricies.

            Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Eget arcu dictum varius duis. Turpis nunc eget lorem dolor sed viverra. Viverra suspendisse potenti nullam ac tortor vitae purus. Tincidunt id aliquet risus feugiat in. Vel pretium lectus quam id. Felis eget nunc lobortis mattis aliquam faucibus. Magna etiam tempor orci eu lobortis elementum. Diam vulputate ut pharetra sit amet aliquam. Tempor nec feugiat nisl pretium fusce id velit ut tortor.

            Euismod nisi porta lorem mollis aliquam ut porttitor leo. In hac habitasse platea dictumst quisque. Massa tincidunt dui ut ornare. Sed turpis tincidunt id aliquet risus. A pellentesque sit amet porttitor. Nunc sed velit dignissim sodales. Porta nibh venenatis cras sed felis eget velit. Aliquam sem fringilla ut morbi tincidunt augue interdum. Risus pretium quam vulputate dignissim suspendisse. Dolor morbi non arcu risus quis varius quam quisque. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Augue neque gravida in fermentum et. Tortor at risus viverra adipiscing at in tellus integer feugiat. Neque convallis a cras semper auctor. Eu lobortis elementum nibh tellus molestie nunc. Id faucibus nisl tincidunt eget nullam non nisi. Ornare arcu odio ut sem nulla. Enim ut tellus elementum sagittis vitae.

            Amet luctus venenatis lectus magna fringilla. Mauris in aliquam sem fringilla ut morbi. Non sodales neque sodales ut etiam sit. Platea dictumst vestibulum rhoncus est pellentesque elit. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Nisi lacus sed viverra tellus. Tincidunt vitae semper quis lectus nulla. Neque gravida in fermentum et sollicitudin ac orci phasellus. Duis at consectetur lorem donec massa. Dolor purus non enim praesent elementum facilisis. Lectus urna duis convallis convallis tellus id interdum. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.

            Semper eget duis at tellus at urna condimentum mattis pellentesque. Non enim praesent elementum facilisis leo vel. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Tellus at urna condimentum mattis pellentesque. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Neque egestas congue quisque egestas diam in. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Id velit ut tortor pretium. Malesuada fames ac turpis egestas sed tempus urna et. Tortor posuere ac ut consequat. Nunc sed id semper risus in hendrerit gravida rutrum quisque. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Sagittis orci a scelerisque purus semper eget duis at. Ornare arcu dui vivamus arcu felis bibendum ut. Bibendum enim facilisis gravida neque convallis a. Tortor at auctor urna nunc id cursus. Eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Facilisi cras fermentum odio eu feugiat pretium nibh.`,
              }}
            />
            {/* <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div> */}
          </div>
          {/* <Menu /> */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
