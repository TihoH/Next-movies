import { getCategories } from '@/API/getCategories';
import { getGanre } from '@/API/getGanre';
import Container from '@/components/Container';
import CategoriesGroupList from '@/components/PageCategories/CardGroupList';
import Pagination from '@/components/Pagination/Pagination';
import React from 'react';

interface pageCategoriesProps {
    params: Promise <{
        id: string
    }>
}

const PageCategories = async ({params} :pageCategoriesProps ) => {
    const {id} = await params
    const {results} = await getCategories( id , 'movie' )
    const {genres} = await getGanre('movie')

    console.log(results)
    return (
        <Container>
           <CategoriesGroupList dataList={results} genres={genres} />
           <Pagination/>
        </Container>
    );
};

export default PageCategories;