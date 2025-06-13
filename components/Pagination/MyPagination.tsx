'use client'
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({count , page , changeCurrentPage}) {
  return (
    <Stack spacing={2}   sx={{
      '& .MuiPaginationItem-root': {
        color: 'primary.main',          // цвет элементов
        fontWeight: 'bold',
        '&.Mui-selected': {
          backgroundColor: 'primary.dark',  // фон выбранного элемента
          color: 'white',                   // цвет выбранного элемента
        },
        '&:hover': {
          backgroundColor: 'primary.light', // фон при наведении
        },
      },
    }}>
      <Pagination count={count} variant="outlined" shape="rounded" page={page} onChange={ changeCurrentPage } />
    </Stack>
  );
}