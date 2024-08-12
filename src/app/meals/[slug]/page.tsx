import Link from "next/link";

const MealDetails: React.FC<MealDetailsProps> = ({ params }) => {
  return (
    <main>
      <h1>Meal Details {params.slug}</h1>
      <Link href={"/meals"}>Go back to MEALS page</Link>
    </main>
  );
};

export interface MealDetailsProps {
  params: {
    slug: string;
  };
}

export default MealDetails;
