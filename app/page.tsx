import Container from "@/components/Container";
import BannerSlideGetData from "@/components/ServerComponents/BannerSlideGetData";
import GroupListFilms from "../components/ServerComponents/GroupListFilms";


export default function Home() {

  return (
    <main>
       <BannerSlideGetData />
       <Container>
        <GroupListFilms title={'Сейчас смотрят'} type={"movie"} movieListType={"now_playing"} />
        <GroupListFilms title={'Самый высокий рейтинг'} type={"movie"} movieListType={"top_rated"} />
        <GroupListFilms title={'Популярные'} type={"movie"} movieListType={"popular"} />
        <GroupListFilms title={'В ближайшее время'} type={"movie"} movieListType={"upcoming"} />
       </Container>
    </main>
  );
}
