import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {APP_ENV} from "../env";
import {CategoryItem, ICategoryPostRequest} from "./types.ts";


// Define the API slice
export const apiCategory = createApi({
    reducerPath: 'category',
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_ENV.REMOTE_BASE_URL}/api` }), // Replace with your base API URL
    tagTypes: ["Category"], // Додаємо tag для категорій
    endpoints: (builder) => ({
        getCategories: builder.query<CategoryItem[], void>({
            query: () => 'categories', // Replace with your endpoint
            providesTags: ["Category"], // Позначаємо, що цей запит пов'язаний з "Category"
        }),
        createCategory: builder.mutation<CategoryItem, ICategoryPostRequest>({
            query: (newCategory) => ({
                url: 'categories/',
                method: 'POST',
                body: newCategory,
            }),
            invalidatesTags: ["Category"], // Інвалідовуємо "Category" після створення
        }),
    }),
});

// Export the auto-generated hook
export const { useGetCategoriesQuery, useCreateCategoryMutation } = apiCategory;
