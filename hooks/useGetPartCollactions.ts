import { getPartApi } from "@/API/getPart";
import { IPart } from "@/types/types";
import { useEffect, useState } from "react";

export function useGetPartCollactions(id: number){
    const [dataPart , setDataPart] = useState<IPart[]>([]) 

    async function getPart(id:number){
        try {
            const getData = await getPartApi(id)
            setDataPart(getData.parts.map( item => ({...item , release_date: item.release_date ? item.release_date.slice(0 , 4) : 'неизвестно'}) ))
        } catch (error) {
            console.log('ошибка получения PART' , error)
        }
    }

    useEffect( () => {
        getPart(id)
    } , [id])


    return dataPart
}