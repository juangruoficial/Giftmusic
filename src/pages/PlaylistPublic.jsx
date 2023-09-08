import ContainerMusic from "../components/layout/ContainerMusic";
import PublicLayout from "../components/layout/PublicLayout";
import ListPlaylistDetail from "../components/playlistDetail.jsx/ListPlaylistDetail";
import EmbedTrack from "../components/shared/EmbedTrack";
import usePlaylistPublic from "../hooks/playlistPublic/usePlaylistPublic";
import FormPublicPlaylist from "../components/publicplaylist/FormPublicPlaylist";

const PlaylistPublic = () => {
  const {
    isShowingSideA,
    setIsShowingSideA,
    playlistInfo,
    formRef,
    handleCopyLink,
    currentTrack,
    setCurrentTrack,
  } = usePlaylistPublic();

  return (
    <PublicLayout>
      <ContainerMusic>
        <FormPublicPlaylist
          formRef={formRef}
          isShowingSideA={isShowingSideA}
          handleCopyLink={handleCopyLink}
        />
        <button
          className="max-w-max mx-auto block my-4"
          type="button"
          onClick={() => setIsShowingSideA(!isShowingSideA)}
        >
          {isShowingSideA ? "Flip to side B" : "Flip to side A"}
        </button>

        {currentTrack && <EmbedTrack trackId={currentTrack} />}
        <ListPlaylistDetail
          tracks={playlistInfo?.tracks || []}
          showPlayBtn={true}
          setCurrentTrack={setCurrentTrack}
        />
      </ContainerMusic>
    </PublicLayout>
  );
};
export default PlaylistPublic;
