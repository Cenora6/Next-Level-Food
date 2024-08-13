import Link from "next/link";
import styles from "./page.module.css";
import { MealsGrid } from "@/components/meals-grid/meals-grid";
import { getMeals } from "@/lib/db";
import { Suspense } from "react";

const Meals = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
          <MealsList />
        </Suspense>
      </main>
    </>
  );
};

async function MealsList() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default Meals;
