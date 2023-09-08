import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosMusic } from "../../config/axios.config";

const usePlaylistDetail = () => {
  const [isShowingSideA, setIsShowingSideA] = useState(true);
  const [playlistInfo, setPlaylistInfo] = useState(null);

  const { id } = useParams();

  const formRef = useRef(null);

  const handleDeleteTrackFromPlaylist = (trackId) => {
    axiosMusic
      .delete(`/api/playlists/${playlistInfo.id}/tracks/${trackId}`)
      .then(() => {
        const newTracks = (playlistInfo.tracks = playlistInfo.tracks.filter(
          (track) => track.id !== trackId
        ));
        setPlaylistInfo({ ...playlistInfo, tracks: newTracks });
      })
      .catch((err) => console.log(err));
  };

  const handleDeletePlaylist = () => {
    axiosMusic
      .delete(`/api/playlists/${id}`)
      .then(() => (window.location.href = "/playlists"))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    axiosMusic
      .patch(`/api/playlists/${id}`, formData)
      .then(() => {
        alert("Playlist updated");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosMusic
      .get(`/api/playlists/${id}`)
      .then(({ data }) => setPlaylistInfo(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (playlistInfo) {
      formRef.current.playlistDetailTitle.value = playlistInfo.title;
      formRef.current.playlistDetailTo.value = playlistInfo.to;
      formRef.current.playlistDetailMessage.value = playlistInfo.message;
    }
  }, [playlistInfo]);
  return {
    isShowingSideA,
    setIsShowingSideA,
    playlistInfo,
    formRef,
    handleSubmit,
    handleDeleteTrackFromPlaylist,
    handleDeletePlaylist,
    id,
  };
};
export default usePlaylistDetail;
