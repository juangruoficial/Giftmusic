import TrackByPlaylistDetail from "./TrackByPlaylistDetail.jsx";

const ListPlaylistDetail = ({ tracks, handleDeleteTrackFromPlaylist }) => {
  return (
    <section className="grid gap-2">
      {tracks.map((track) => (
        <TrackByPlaylistDetail
          key={track.id}
          track={track}
          handleDeleteTrackFromPlaylist={handleDeleteTrackFromPlaylist}
        />
      ))}
    </section>
  );
};
export default ListPlaylistDetail;
