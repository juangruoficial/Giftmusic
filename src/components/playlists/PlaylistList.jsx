import PlaylistCard from "./PlaylistCard";

const PlaylistList = ({ playlists }) => {
  const quantityCassettes = playlists.length;
  const HEIGHTCASSETTE = 180;
  const distanceBetweenCassettes = 55;
  const heightContainer =
    (quantityCassettes - 1) * distanceBetweenCassettes + HEIGHTCASSETTE;

  return (
    <section
      className="w-[256px] mx-auto mt-10 relative"
      style={{
        height: `${heightContainer}px`,
      }}
    >
      {playlists.map((playlist, index) => (
        <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
      ))}
    </section>
  );
};
export default PlaylistList;
