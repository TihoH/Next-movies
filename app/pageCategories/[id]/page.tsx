// import { getCategories } from "@/API/getCategories";
import { getGanre } from "@/API/getGanre";
import Container from "@/components/Container";
import CategoriesGroupList from "@/components/PageCategories/CardGroupList";
import React from "react";

interface pageCategoriesProps {
  params: Promise<{
    id: string;
  }>;
}

const PageCategories = async ({ params }: pageCategoriesProps) => {
  const { id } = await params;
  // const dataResponse = await getCategories(id, "movie" , 2);
  const { genres } = await getGanre("movie");

  // console.log(dataResponse);

  return (
    <Container>
      <CategoriesGroupList
      id={id}
        // dataList={dataResponse.results}
        genres={genres}
        // respone={dataResponse}
      />
    </Container>
  );
};

export default PageCategories;
