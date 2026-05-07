import api from "@/lib/api";

export interface LocalizedText {
  en: string;
  am: string;
}

export type NutritionUnit = "g" | "mg" | "kcal" | "%";
export type IngredientType = "main" | "additive" | "allergen";

export interface NutritionItem {
  name: string;
  value: number;
  unit: NutritionUnit;
  dailyValue?: number;
}

export interface Nutrition {
  servingSize: string;
  calories: number;
  items: NutritionItem[];
}

export interface Ingredient {
  name: string;
  type?: IngredientType;
}

export interface Ingredients {
  list: Ingredient[];
  contains?: string[];
  mayContain?: string[];
}

export interface Certification {
  name: string;
  image: string;
}

export interface ProductContent {
  description: LocalizedText;
  netWeight?: string;
  nutrition?: Nutrition;
  ingredients?: Ingredients;
  certifications?: Certification[];
}

export interface ProductPayload {
  slug: string;
  name: LocalizedText;
  category: "Biscuit" | "Flour";
  media: { image: string; tagIcon?: string };
  ui: { bgColor: string; textColor: string; nameColor: string };
  content: ProductContent;
  relatedProducts?: string[];
  available?: boolean;
}

export interface ProductItem extends ProductPayload {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export const productsApi = {
  list: async () => (await api.get<ProductItem[]>("/products")).data,
  create: async (payload: ProductPayload) =>
    (await api.post<ProductItem>("/products", payload)).data,
  update: async (slugOrId: string, payload: Partial<ProductPayload>) =>
    (
      await api.put<ProductItem>(
        `/products/${encodeURIComponent(slugOrId)}`,
        payload,
      )
    ).data,
  remove: async (slugOrId: string) =>
    (await api.delete(`/products/${encodeURIComponent(slugOrId)}`)).data,
};
