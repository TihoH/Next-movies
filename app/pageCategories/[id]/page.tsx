//Server Component
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
  const { genres } = await getGanre("movie");

  return (
    <Container>
      <CategoriesGroupList id={id} genres={genres} />
    </Container>
  );
};

export default PageCategories;
