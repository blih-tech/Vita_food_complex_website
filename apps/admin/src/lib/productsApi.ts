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

export interface ProductUploadFiles {
  imageFile?: File | null;
  tagIconFile?: File | null;
  certificationFiles?: Array<File | null>;
}

function buildProductFormData(
  payload: ProductPayload | Partial<ProductPayload>,
  files?: ProductUploadFiles,
) {
  const formData = new FormData();
  formData.append("payload", JSON.stringify(payload));

  if (files?.imageFile) {
    formData.append("image", files.imageFile);
  }
  if (files?.tagIconFile) {
    formData.append("tagIcon", files.tagIconFile);
  }
  files?.certificationFiles?.forEach((file, idx) => {
    if (file) {
      formData.append(`certificationImages[${idx}]`, file);
    }
  });

  return formData;
}

export const productsApi = {
  list: async () => (await api.get<ProductItem[]>("/products")).data,
  create: async (payload: ProductPayload, files?: ProductUploadFiles) =>
    (
      await api.post<ProductItem>("/products", buildProductFormData(payload, files), {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data,
  update: async (
    productId: string,
    payload: Partial<ProductPayload>,
    files?: ProductUploadFiles,
  ) =>
    (
      await api.put<ProductItem>(
        `/products/${encodeURIComponent(productId)}`,
        buildProductFormData(payload, files),
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      )
    ).data,
  remove: async (productId: string) =>
    (await api.delete(`/products/${encodeURIComponent(productId)}`)).data,
};
