import Link from "next/link";
import Image from "next/image";
import styles from "./meal-item.module.css";
import { Meal } from "@/models/Meal";

interface MealItemProps
  extends Pick<Meal, "summary" | "title" | "creator" | "slug" | "image"> {}

export const MealItem: React.FC<MealItemProps> = ({
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image
            src={`https://cenora-nextjs-demo-users-image.s3.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};
