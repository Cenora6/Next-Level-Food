"use client";

import { useFormStatus } from "react-dom";

export const MealsForm: React.FC = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};
