"use server";

import { saveMeal } from "@/lib/db";
import { redirect } from "next/navigation";
import { SavedMeal } from "@/models/Meal";

export const onShareMeal = async (data: FormData) => {
  const meal = {
    title: data.get("title"),
    summary: data.get("summary"),
    instructions: data.get("instructions"),
    image: data.get("image"),
    creator: data.get("name"),
    creator_email: data.get("email"),
  } as SavedMeal;

  await saveMeal(meal);
  redirect("/meals");
};
