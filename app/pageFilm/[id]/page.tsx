import Container from "@/components/Container";
import React from "react";
import { getFilmById } from "@/API/getFilmById";
import { getTrailer } from "@/API/getTrailer";
import { getActors } from "@/API/getActors";
import GroupListFilms from "@/components/ServerComponents/GroupListFilms";
import PageFilmBasis from "./PageFilmBasis";
import PartFilm from "./PartFilm";
import { getGanre } from "@/API/getGanre";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PageFilm({ params }: PageProps) {
  const { id } = await params;
  const data = await getFilmById(id, "movie");
  const trailer = await getTrailer(id, "movie");
  const actors = await getActors("movie", id);
  const partId = await data?.belongs_to_collection?.id
  const genres = await getGanre("movie");


  return (
    <Container className="flex flex-col pt-10 min-h-screen ">
      <PageFilmBasis data={data} trailer={trailer} actors={actors} />
      { partId && <PartFilm partId={partId} id={id}/> }
      <GroupListFilms
        title={"Рекомендуемые к просмотру "}
        type={"movie"}
        movieListType={"recommendations"}
        id={id}
        genres={genres.genres}
      />
      <GroupListFilms
        title={"Похожие"}
        type={"movie"}
        movieListType={"similar"}
        id={id}
          genres={genres.genres}
      />
    </Container>
  );
}
