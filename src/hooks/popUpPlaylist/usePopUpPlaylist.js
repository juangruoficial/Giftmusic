import { useState } from "react";
import { usePlaylistCart } from "../../store/playlistCart";
import { axiosMusic } from "../../config/axios.config";

const usePopUpPlaylist = () => {
  const [isShowingSideA, setIsShowingSideA] = useState(true);
  const tracksInPlaylist = usePlaylistCart((state) => state.tracks);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    formData.tracks = tracksInPlaylist;

    axiosMusic
      .post("/api/playlists", formData)
      .then(
        () => (
          e.target.reset(),
          usePlaylistCart.getState().clearTracks(),
          setIsShowingSideA(true)
        )
      )
      .catch((error) => console.log(error));
  };

  return {
    isShowingSideA,
    setIsShowingSideA,
    handleSubmit,
    tracksInPlaylist,
  };
};
export default usePopUpPlaylist;
