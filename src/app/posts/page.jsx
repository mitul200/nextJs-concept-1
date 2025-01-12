import { getPost } from "@/services/postApi";
import Link from "next/link";
import React from "react";

const page = async () => {
  const postData = await getPost();
  // console.log(postData);
  return (
    <div className=" mx-8">
      <h1 className=" text-center text-4xl font-semibold ">
        All <span className=" text-red-600">Posts</span>
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {postData?.slice(0, 20).map(({ userId, id, title, body }) => (
          <div key={id} className=" border border-solid p-2">
            <h5>Id Number :{userId}</h5>
            <h6>Title :{title}</h6>
            <h6>Details :{body}</h6>
            <button className=" broder border-solid mx-4 my-3 bg-blue-400 p-2 rounded-xl">
              <Link href={`/posts/${id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
