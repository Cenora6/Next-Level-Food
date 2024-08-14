"use server";

import { saveMeal } from "@/lib/db";
import { redirect } from "next/navigation";
import { SavedMeal } from "@/models/Meal";
import { revalidatePath } from "next/cache";

export const onShareMeal = async (prevState: PreviousState, data: FormData) => {
  const meal = {
    title: data.get("title"),
    summary: data.get("summary"),
    instructions: data.get("instructions"),
    image: data.get("image"),
    creator: data.get("name"),
    creator_email: data.get("email"),
  } as SavedMeal;

  if (
    isStringInvalid(meal.title) ||
    isStringInvalid(meal.summary) ||
    isStringInvalid(meal.instructions) ||
    isStringInvalid(meal.creator) ||
    isStringInvalid(meal.creator_email) ||
    isEmailInvalid(meal.creator_email) ||
    isImageInvalid(meal.image)
  ) {
    return {
      message: "Invalid input. Please make sure all fields are filled out.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
};

const isStringInvalid = (value?: string) => {
  return !value || value.trim() === "";
};

const isEmailInvalid = (value?: string) => {
  return !value || !value.includes("@");
};

const isImageInvalid = (value: File) => {
  return !value || value.size === 0;
};

interface PreviousState {
  message: string;
}
