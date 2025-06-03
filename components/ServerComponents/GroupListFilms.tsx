import { getMovieListsByType } from '@/API/getMovieListsByType';
import ListFilm from '@/components/ListFilm';
import { GroupListFilmsProps } from '@/types/types';
import React from 'react';

const GroupListFilms:React.FC<GroupListFilmsProps> = async({title , type , movieListType  , id}) => {
    const data = await getMovieListsByType( type, movieListType , id );

    return (
        <div className='group/newGroup  mt-2 w-full'>
            <h4 className='group-hover/newGroup:text-green-700 text-[25px] mt-5 py-5 text-gray-400'>
                {title}
            </h4>
            <ListFilm  data={data.results}  />
        </div>
    );
};

export default GroupListFilms;
