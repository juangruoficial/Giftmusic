import { useEffect, useRef, useState } from "react";
import { axiosMusic } from "../../config/axios.config";
import { useParams } from "react-router-dom";

const usePlaylistPublic = () => {
  const [isShowingSideA, setIsShowingSideA] = useState(true);
  const [playlistInfo, setPlaylistInfo] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const formRef = useRef(null);
  const { id } = useParams();

  const handleCopyLink = () => {
    const link = window.location.href;
    navigator.clipboard
      .writeText(link)
      .then(() => alert("Link copied to clipboard"));
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
    handleCopyLink,
    currentTrack,
    setCurrentTrack,
  };
};
export default usePlaylistPublic;
