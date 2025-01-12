import React from "react";

const getPostDetailsData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

const postDetailsPage = async ({ params }) => {
  console.log(params.id);
  const { title, body } = await getPostDetailsData(params?.id);
  // console.log(postDetailsPage);
  return (
    <div>
      <h1>Post details of {params.id}</h1>
      <h1>Title: {title}</h1>
      <h3>Body :{body}</h3>
    </div>
  );
};

export default postDetailsPage;
