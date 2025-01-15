export const getPost = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = res.json();
  return data;
  // console.log(data);
};
