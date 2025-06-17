
import { getCategories } from '@/API/getCategories';
import { DataSearch } from '@/types/types';
import { useEffect, useState } from "react"

export function useGetCategories(id: string, type: string, page: number , year:any , sort:string | null) {
    const [categories, setCategories] = useState<DataSearch | null>(null)

    async function fetchCategories(id: string, type: string, page: number , year:any , sort:string | null) {
        try {
            const response = await getCategories(id, type, page , year , sort)
            setCategories(response)

        } catch (error) {
            console.log('ошибка получения категорий', error)
        }
    }


    useEffect(() => {
        fetchCategories(id, type, page , year , sort)
    }, [id, type, page , year , sort])


    return categories
}