export interface Meal {
  readonly id: string;
  creator: string;
  creator_email: string;
  image: string;
  instructions: string;
  slug: string;
  summary: string;
  title: string;
}

export interface SavedMeal {
  creator: string;
  creator_email: string;
  image: File;
  instructions: string;
  slug?: string;
  summary: string;
  title: string;
}
