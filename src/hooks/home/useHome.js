import { useEffect, useState } from "react";
import { axiosMusic } from "../../config/axios.config";

const useHome = () => {
  const [tracksRecommendations, settracksRecommendations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [limitTracks, setLimitTracks] = useState(10);

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
  return {
    handleSubmit,
    handleLimitChange,
    tracksToShow,
    limitTracks,
  };
};

export default useHome;
