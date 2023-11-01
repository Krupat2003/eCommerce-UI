import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const categoryService = createApi({
    reducerPath: 'category',
    tagTypes: 'categories',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        // set token inside API header  using prepareHeaders
        prepareHeaders : (headers, {getState}) => {
            const reducers = getState();
            const token = reducers?.authReducer?.adminToken;
            console.log(token);
            headers.set('authorization', token ? `Bearer ${token}` : '' );
            return headers;
        }
    }),

    endpoints: (builder) => {
        return {
            // mutation use to add and update 
            create: builder.mutation({
                query: (name) => {
                    return {
                        url: 'create-category',
                        method: 'POST',
                        body: name
                    };
                },
                invalidatesTags: ['categories'], //display  letest record when same value of  tagTypes: 'categories' and invalidatesTags: ['categories'] and  providesTags: ['categories']

            }),
            get: builder.query({
                query: (page) => {
                    return{
                        url : `categories/${page}`,
                        method: 'GET'
                    }
                },
                providesTags: ['categories'], //display  letest record 

            }),
            fetchCategory: builder.query({
                query: (id) => {
                    return {
                        url: `fetch-category/${id}`,
                        method: 'GET'
                    }
                }
            })
        }
    }
});

export const { useCreateMutation, useGetQuery, useFetchCategoryQuery } = categoryService;

export default categoryService;