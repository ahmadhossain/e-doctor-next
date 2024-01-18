import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
// import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import { app } from "@/utils/firebase";
// import ReactQuill from "react-quill";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  if (!session) router.push("/api/auth/signin");

  //   useEffect(() => {
  //     const storage = getStorage(app);
  //     const upload = () => {
  //       const name = new Date().getTime() + file.name;
  //       const storageRef = ref(storage, name);

  //       const uploadTask = uploadBytesResumable(storageRef, file);

  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log("Upload is " + progress + "% done");
  //           switch (snapshot.state) {
  //             case "paused":
  //               console.log("Upload is paused");
  //               break;
  //             case "running":
  //               console.log("Upload is running");
  //               break;
  //           }
  //         },
  //         (error) => {},
  //         () => {
  //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //             setMedia(downloadURL);
  //           });
  //         }
  //       );
  //     };

  //     file && upload();
  //   }, [file]);

  //   if (status === "loading") {
  //     return <div className={styles.loading}>Loading...</div>;
  //   }

  //   if (status === "unauthenticated") {
  //     router.push("/");
  //   }

  const slugify = (str: any) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8080/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc: value,
        // img: media,
        slug: slugify(title),
        userEmail: "ahmad@gmail.com",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/blog/${data.slug}`);
    }
  };

  return (
    <div className="px-10">
      <div className={styles.container}>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button
            style={{ marginTop: 50 }}
            type="primary"
            onClick={handleSubmit}
          >
            Publish
          </Button>
        </div>
        <div className={styles.editor}>
          {/* <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              //   onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )} */}
          <TextArea
            // showCount
            // maxLength={100}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write..."
            style={{ height: 220, resize: "none", border: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default WritePage;
