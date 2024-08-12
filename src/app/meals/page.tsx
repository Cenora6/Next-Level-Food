import Link from "next/link";

const Meals: React.FC = () => {
  return (
    <main>
      <h1>Meals</h1>
      <Link href={"/meals/share"}>Share meal</Link>
      <Link href={"/"}>Go back</Link>
    </main>
  );
};

export default Meals;
