import FormHome from "../components/home/formHome";
import ContainerMusic from "../components/layout/ContainerMusic";
import ListTrackDefault from "../components/shared/ListTrackDefault";

import useHome from "../hooks/home/useHome";
const Home = () => {
  const { tracksToShow } = useHome();

  return (
    <ContainerMusic>
      <header className="text-lg">
        <FormHome />
      </header>

      <ListTrackDefault tracks={tracksToShow} />
    </ContainerMusic>
  );
};
export default Home;
