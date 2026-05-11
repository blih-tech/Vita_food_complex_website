import api from "@/lib/api";

export interface LocalizedText {
  en: string;
  am: string;
}

export interface RecipePayload {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  media: { image: string };
  bgColor: string;
  sortOrder?: number;
  published?: boolean;
}

export interface RecipeItem extends RecipePayload {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface RecipeUploadFiles {
  imageFile?: File | null;
}

function buildRecipeFormData(
  payload: RecipePayload | Partial<RecipePayload>,
  files?: RecipeUploadFiles,
) {
  const formData = new FormData();
  formData.append("payload", JSON.stringify(payload));
  if (files?.imageFile) {
    formData.append("image", files.imageFile);
  }
  return formData;
}

export const recipesApi = {
  list: async () => (await api.get<RecipeItem[]>("/recipes")).data,
  create: async (payload: RecipePayload, files?: RecipeUploadFiles) =>
    (
      await api.post<RecipeItem>("/recipes", buildRecipeFormData(payload, files), {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data,
  update: async (
    recipeId: string,
    payload: Partial<RecipePayload>,
    files?: RecipeUploadFiles,
  ) =>
    (
      await api.put<RecipeItem>(
        `/recipes/${encodeURIComponent(recipeId)}`,
        buildRecipeFormData(payload, files),
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      )
    ).data,
  remove: async (recipeId: string) =>
    (await api.delete(`/recipes/${encodeURIComponent(recipeId)}`)).data,
};
