"use client";

import { useFormState } from "react-dom";
import styles from "./page.module.css";
import { ImagePicker } from "@/components/image-picker/image-picker";
import { onShareMeal } from "@/lib/actions";
import { MealsForm } from "@/components/meals-form/meals-form";

const MealsShare: React.FC = () => {
  const [state, formAction] = useFormState(onShareMeal, { message: "" });
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Meal Image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={styles.actions}>
            <MealsForm />
          </p>
        </form>
      </main>
    </>
  );
};

export default MealsShare;
