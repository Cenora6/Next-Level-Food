import styles from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/db";
import { notFound } from "next/navigation";

interface MealDetailsProps {
  params: {
    slug: string;
  };
}

const MealDetails: React.FC<MealDetailsProps> = ({ params }) => {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: formatInstructions(meal.instructions),
          }}
        ></p>
      </main>
    </>
  );
};

const formatInstructions = (instructions: string) => {
  return instructions.replace(/\n/g, "<br>");
};

export default MealDetails;
