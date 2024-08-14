import styles from "./meals-grid.module.css";
import { Meal } from "@/models/Meal";
import { MealItem } from "@/components/meal-item/meal-item";

interface MealsGridProps {
  meals: Meal[];
}

export const MealsGrid: React.FC<MealsGridProps> = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map(({ id, ...meal }) => (
        <li key={id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
