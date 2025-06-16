import Container from "@/components/Container";
import React from "react";
import { getFilmById } from "@/API/getFilmById";
import { getTrailer } from "@/API/getTrailer";
import { getActors } from "@/API/getActors";
import GroupListFilms from "@/components/ServerComponents/GroupListFilms";
import PageFilmBasis from "../../../../components/PageFilm/PageFilmBasis";
import PartFilm from "../../../../components/PageFilm/PartFilm";
import { getGanre } from "@/API/getGanre";

type PageProps = {
  params: Promise<{
    id: string;
    type: string;
  }>;
};

export default async function PageFilm({ params }: PageProps) {
  const { id, type } = await params;
  const data = await getFilmById(id, type);
  const trailer = await getTrailer(id, type);
  const actors = await getActors(type, id);
  const partId = await data?.belongs_to_collection?.id;
  const genres = await getGanre(type);

  console.log(data);

  return (
    <Container className="flex flex-col pt-10 min-h-screen ">
      <PageFilmBasis data={data} trailer={trailer} actors={actors} />
      {partId || data.seasons ? (
        <PartFilm
          partId={partId}
          id={id}
          type={type}
          dataSeasons={data.seasons}
          currentTv={data}
        />
      ) : null}
      <GroupListFilms
        title={"Рекомендуемые к просмотру "}
        type={type}
        movieListType={"recommendations"}
        id={id}
        genres={genres.genres}
      />
      <GroupListFilms
        title={"Похожие"}
        type={type}
        movieListType={"similar"}
        id={id}
        genres={genres.genres}
      />
    </Container>
  );
}
