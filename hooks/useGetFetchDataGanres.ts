import { GanresType } from "@/types/types";
import { useEffect } from "react";
import { useState } from "react";

type GetGenresFunc = (type: string) => Promise<{ genres: GanresType[] }>;

export function useGetFetchDataGanres(type: string , getFunc: GetGenresFunc  ){
    const [data , setData] = useState<GanresType[]>([]) 

    async function getData(type: string , getFunc:GetGenresFunc) {
        const response = await getFunc(type )
        setData(response.genres)
    }

    useEffect( () => {
        getData(type , getFunc )
    } , [] )

    return data
}