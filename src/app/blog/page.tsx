import React from "react";
import Style from "./blog.module.css";
import Image from "next/image";

async function GetData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

const page = async () => {
  const data = await GetData();

  return (
    <div className={Style.container}>
      <h1 className={Style.head}>Blog</h1>

      <ul className={Style.list}>
        {data.map(
          (post: {
            id: React.Key | null | undefined;
            title: React.ReactNode;
            body: React.ReactNode;
          }) => (
            <li key={post.id} className={Style.item}>
              <div className={Style.flexContainer}>
                <Image
                  src="/blog.jpeg" 
                  width={150} 
                  height={150}
                  alt="blog image"
                  className={Style.img}
                />
                <div className={Style.textContainer}>
                  <h2 className={Style.listheader}>{post.title}</h2>
                  <p className={Style.listp}>{post.body}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default page;
