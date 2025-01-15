import Meals from "@/component/Meals";

export const metadata = {
  title: "Meals ",
  description: "Super powerful Next Website",
};

const page = () => {
  return (
    <div className="p-12">
      <h1 className=" text-3xl font-semibold text-red-400">
        Choose your meals
      </h1>
      <p className="">Choose meals for choice your searching..</p>
      <Meals />
    </div>
  );
};

export default page;
