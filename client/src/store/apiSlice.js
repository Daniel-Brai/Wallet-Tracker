import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:4000'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI}),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/api/categories',
            providesTags: ['categories']
        }),
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags: ['transactions']
        }),
        createTransaction: builder.mutation({
            query: (data) => ({
                url: '/api/transactions',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['transactions']
        }),
        deleteTransaction: builder.mutation({
            query: id => ({
                url: '/api/transactions',
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ['transactions']
        })
    })
})

export default apiSlice;