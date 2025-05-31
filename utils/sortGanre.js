

export  function sortGenres(ids, allGenres){
    // сташил , нужно повторить
    return ids
      ?.map((id) => allGenres?.find((g) => g.id === id)?.name)
      .filter(Boolean)
      .join(", ")
  };