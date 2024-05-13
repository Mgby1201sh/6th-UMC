import ListMovie from "../components/Movie/ListMovie";
import PageContainer from "../components/Style/PageStyle";

const UpComing = () => {
    return (
        <PageContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/upcoming"/>
        </PageContainer>
    )
}

export default UpComing;