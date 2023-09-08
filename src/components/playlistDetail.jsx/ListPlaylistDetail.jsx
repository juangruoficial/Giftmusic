import TrackByPlaylistDetail from "./TrackByPlaylistDetail.jsx";

const ListPlaylistDetail = ({
  tracks,
  handleDeleteTrackFromPlaylist,
  showPlayBtn,
  showDeleteBtn,
  setCurrentTrack,
}) => {
  return (
    <section className="grid gap-2">
      {tracks.map((track) => (
        <TrackByPlaylistDetail
          key={track.id}
          track={track}
          handleDeleteTrackFromPlaylist={handleDeleteTrackFromPlaylist}
          showPlayBtn={showPlayBtn}
          showDeleteBtn={showDeleteBtn}
          setCurrentTrack={setCurrentTrack}
        />
      ))}
    </section>
  );
};
export default ListPlaylistDetail;
