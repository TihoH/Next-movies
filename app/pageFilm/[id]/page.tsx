import Container from "@/components/Container";
import React from "react";
import PageFilmDescription from "@/components/PageFilm/PageFilmDescription";
import { getFilmById } from "@/API/getFilmById";
import { getTrailer } from "@/API/getTrailer";
import { getActors } from "@/API/getActors";
import Image from "next/image";
import BTNFavorites from "@/components/UI/BTNFavorites";

export default async function PageFilm({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const data = await getFilmById(id, "movie");
  const trailer = await getTrailer(id, "movie");
  const actors = await getActors("movie", id);

  return (
    <Container>
      <div className="relative z-10 py-10 flex">
        <div>
          <Image
            className="rounded-lg border border-green-800"
            src={`https://image.tmdb.org/t/p/w780/${data?.poster_path}`}
            alt=""
            width={400}
            height={300}
          />
          <BTNFavorites
            text="Добавить в избранное"
            className="mt-3"
            isHover={false}
          />
        </div>
        <div className="w-[70%] pl-10">
          <PageFilmDescription
            data={data}
            trailer={trailer}
            actors={actors.cast}
          />
        </div>
      </div>
      <img
        className="w-full object-cover object-center absolute top-0 left-0 right-0 opacity-25 border-b border-green-500"
        src={`https://image.tmdb.org/t/p/w780/${data?.backdrop_path}`}
        alt=""
      />
    </Container>
  );
}