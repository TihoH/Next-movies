
import { getCategories } from '@/API/getCategories';
import { DataSearch } from '@/types/types';
import { useEffect, useState } from "react"

export function useGetCategories(id: string, type: string, page: number) {
    const [categories, setCategories] = useState<DataSearch | null>(null)

    async function fetchCategories(id: string, type: string, page: number) {
        try {
            const response = await getCategories(id, type, page)
            setCategories(response)

        } catch (error) {
            console.log('ошибка получения категорий', error)
        }
    }


    useEffect(() => {
        fetchCategories(id, type, page)
    }, [id, type, page])


    return categories
}