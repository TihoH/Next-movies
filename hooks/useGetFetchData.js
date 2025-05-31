import { useEffect } from "react";
import { useState } from "react";


export function useGetFetchData(type , getFunc , movieListType ){
    const [data , setData] = useState([]) 

    async function getData(type , getFunc , movieListType) {
        const response = await getFunc(type , movieListType)
        setData(response)
    }

    useEffect( () => {
        getData(type , getFunc , movieListType)
    } , [] )

    return data
}