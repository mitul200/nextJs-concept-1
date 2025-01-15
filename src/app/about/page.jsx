import React from "react";

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", { cache: "no-store" });
  const localTime = await res.json();
  return localTime.currentTime;
};
const page = async () => {
  const currentTime = await getTime();
  return (
    <div>
      <h2 className=" text-red-600 text-3xl font-semibold text-center mt-44 ">
        Time :{currentTime}{" "}
      </h2>
    </div>
  );
};

export default page;
