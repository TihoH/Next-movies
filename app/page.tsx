import Container from "@/components/Container";
import BannerSlideGetData from "@/components/ServerComponents/BannerSlideGetData";
import GroupListFilms from "../components/ServerComponents/GroupListFilms";
import MainInfo from "@/components/Main/MainInfo";
import { getGanre } from "@/API/getGanre";


export default async function Home() {
  const {genres} = await getGanre('movie')
  
  
  return (
    <main>
       <BannerSlideGetData />
       <Container>
        <GroupListFilms genres={genres} title={'Сейчас смотрят'} type={"movie"} movieListType={"now_playing"} />
        <GroupListFilms genres={genres} title={'Самый высокий рейтинг'} type={"movie"} movieListType={"top_rated"} />
        <MainInfo />
        <GroupListFilms genres={genres} title={'Популярные'} type={"movie"} movieListType={"popular"} />
        <GroupListFilms genres={genres} title={'В ближайшее время'} type={"movie"} movieListType={"upcoming"} />
       </Container>
    </main>
  );
}
