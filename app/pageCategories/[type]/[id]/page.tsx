//Server Component
import { getGanre } from "@/API/getGanre";
import Container from "@/components/Container";
import CategoriesGroupList from "@/components/PageCategories/CardGroupList";
import React from "react";

interface pageCategoriesProps {
  params: Promise<{
    id: string;
    type: string
  }>;
}

const PageCategories = async ({ params }: pageCategoriesProps) => {
  const { id , type } = await params;
  const { genres } = await getGanre(type);

  return (
    <Container>
      <CategoriesGroupList id={id} genres={genres} type={type} />
    </Container>
  );
};

export default PageCategories;
