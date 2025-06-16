import { getPartApi } from "@/API/getPart";
import { IPart } from "@/types/types";
import { useEffect, useState } from "react";

export function useGetPartCollactions(id: number , type: string) {
    const [dataPart, setDataPart] = useState<IPart[]>([])

    async function getPart(id: number) {
        try {
            const getData = await getPartApi(id)
            setDataPart(getData.parts.map(item => ({ ...item,  release_date: item.release_date?.slice(0, 4) || 'неизвестно' })))
        } catch (error) {
            console.log('ошибка получения PART', error)
        }
    }

    useEffect(() => {
       if(type === 'movie'){
         getPart(id)
       }else {
        return
       }
    }, [id , type])


    return dataPart
}