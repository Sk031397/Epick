import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetCSGOResponse, GetDotaResponse } from "./types";
export const api =  createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath:"main",
    tagTypes:["CSGO","Dota"],
    endpoints:(build) => ({
        getCSGO: build.query<GetCSGOResponse,void>({
            query:() => "csgo/state",
            providesTags:["CSGO"],
            
        }),
        getDota: build.query<GetDotaResponse,void>({
            query:() => "dota/state",
            providesTags:["Dota"],
            
        })
    })
})
export const { useGetCSGOQuery, useGetDotaQuery } = api; 