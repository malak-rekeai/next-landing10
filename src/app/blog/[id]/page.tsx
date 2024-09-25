import React from 'react';
import Style from './blogId.module.css';

// Fetch data for a specific blog post using its ID
async function GetData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
}

// Blog component to display a single post based on the ID
export const BlogId = async ({ params }: { params: { id: string } }) => {
  const data = await GetData(params.id); // Fetch the data based on the blog id

  return (
    <div className={Style.container}>
      <h1 className={Style.head}>{data.title}</h1>
      <div className={Style.content}>
        <img src="/blog.jpeg" width={150} height={150} alt="blog image" className={Style.img} />
        <p className={Style.text}>{data.body}</p>
      </div>
    </div>
  );
};

export default BlogId;
