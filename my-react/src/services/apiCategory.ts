import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {APP_ENV} from "../env";

// Define the type for your list items
interface CategoryItem {
    id: number,
    name: string,
    slug: string,
    description: string,
}

// Define the API slice
export const apiCategory = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_ENV.REMOTE_BASE_URL}/api` }), // Replace with your base API URL
    endpoints: (builder) => ({
        getList: builder.query<CategoryItem[], void>({
            query: () => 'categories', // Replace with your endpoint
        }),
    }),
});

// Export the auto-generated hook
export const { useGetListQuery } = apiCategory;
