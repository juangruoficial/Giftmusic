import { Link } from "react-router-dom";
import ContainerMusic from "../components/layout/ContainerMusic";
import ListPlaylistDetail from "../components/playlistDetail.jsx/ListPlaylistDetail";
import usePlaylistDetail from "../hooks/playlistDetail/usePlaylistDetail";
import FormPlaylistDetail from "../components/playlistDetail.jsx/FormPlaylistDetail";

const PlaylistDetail = () => {
  const {
    isShowingSideA,
    setIsShowingSideA,
    playlistInfo,
    handleDeleteTrackFromPlaylist,
    handleDeletePlaylist,
    handleSubmit,
    formRef,
    id,
  } = usePlaylistDetail();

  return (
    <ContainerMusic>
      <Link to={-1}>{"<<"}Back</Link>

      <FormPlaylistDetail
        handleDeletePlaylist={handleDeletePlaylist}
        handleSubmit={handleSubmit}
        formRef={formRef}
        id={id}
        setIsShowingSideA={setIsShowingSideA}
        isShowingSideA={isShowingSideA}
      />

      <button
        className="max-w-max mx-auto block my-4"
        type="button"
        onClick={() => setIsShowingSideA(!isShowingSideA)}
      >
        {isShowingSideA ? "Flip to side B" : "Flip to side A"}
      </button>
      <ListPlaylistDetail
        tracks={playlistInfo?.tracks || []}
        handleDeleteTrackFromPlaylist={handleDeleteTrackFromPlaylist}
        showDeleteBtn={true}
      />
    </ContainerMusic>
  );
};
export default PlaylistDetail;
