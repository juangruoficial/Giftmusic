import TrackPlaylistCard from "./TrackPlaylistCard";

const ListCartPlaylist = ({ tracks }) => {
  console.log(tracks);
  return (
    <section className="max-h-[265px] overflow-y-auto">
      {tracks.map((track) => (
        <TrackPlaylistCard key={track.id} track={track} />
      ))}
    </section>
  );
};
export default ListCartPlaylist;
