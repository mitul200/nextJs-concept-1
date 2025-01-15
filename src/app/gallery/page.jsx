import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" h-screen px-12 py-24">
      <Image
        src="/images/pexels-olly-785667.jpg"
        alt=""
        height="1080"
        width="1920"
      />
    </div>
  );
};

export default page;
