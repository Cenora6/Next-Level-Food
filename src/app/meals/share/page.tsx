import Link from "next/link";

const MealsShare: React.FC = () => {
  return (
    <main>
      <h1>Meals Share</h1>
      <Link href={"/meals"}>Go back to meals</Link>
      <Link href={"/"}>Home</Link>
    </main>
  );
};

export default MealsShare;
