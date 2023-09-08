import { useEffect, useState } from "react";
import ContainerMusic from "../components/layout/ContainerMusic";
import { SearchIcon } from "../components/shared/Icons";
import { axiosMusic } from "../config/axios.config";
import ListTrackDefault from "../components/shared/ListTrackDefault";
import EmbedTrack from "../components/shared/EmbedTrack";

const Home = () => {
  const [tracksRecommendations, settracksRecommendations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [limitTracks, setLimitTracks] = useState(10);
  const [currentTrack, setCurrentTrack] = useState(null);

  const optionsLimit = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
    { value: 40, label: "40" },
    { value: 50, label: "50" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const querySearch = e.target.home_search.value;
    if (!querySearch) return setSearchResults([]);
    axiosMusic
      .get(`/api/tracks?limit=${limitTracks}&q=${querySearch}`)
      .then(({ data }) => setSearchResults(data.tracks.items))
      .catch((err) => console.log(err));
  };

  const handleLimitChange = (e) => {
    const newLimit = parseInt(e.target.value, 10);
    setLimitTracks(newLimit);
  };

  const tracksToShow = searchResults?.length
    ? searchResults
    : tracksRecommendations;

  useEffect(() => {
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=techno,trip-hop,groove")
      .then(({ data }) => settracksRecommendations(data.tracks))
      .catch((err) => console.log(err));
  }, []);

  //"techno" ,"trip-hop""groove"

  return (
    <ContainerMusic>
      <header className="text-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-purple-dark p-2 rounded-md flex gap-2 items-center"
        >
          <button>
            <SearchIcon />
          </button>
          <input
            className="bg-transparent flex-1"
            type="text"
            placeholder="Search..."
            size={10}
            id="home_search"
            autoComplete="off"
          />
          <select
            onChange={handleLimitChange}
            value={limitTracks}
            className="bg-transparent outline-none"
          >
            {optionsLimit.map((option) => (
              <option
                className="bg-purple-dark text-white option-bg-color"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </form>
      </header>

      <ListTrackDefault tracks={tracksToShow} />
    </ContainerMusic>
  );
};
export default Home;
