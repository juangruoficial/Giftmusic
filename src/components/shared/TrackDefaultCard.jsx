import { Link } from "react-router-dom";
import { PlayIcon, PlusIcon } from "./Icons";
import { usePlaylistCart } from "../../store/playlistCart";

const TrackDefaultCard = ({ track, setCurrentTrack }) => {
  const addTrackToPlaylist = usePlaylistCart((state) => state.addTrack);

  const handlePlaySong = () => {
    setCurrentTrack(track.spotifyId);
  };

  return (
    <article className="flex items-center gap-2 hover:bg-white/20 p-1 rounded-md pr-2 transition-colors">
      <header className="rounded-md overflow-hidden">
        <img src={track.album.images[2]?.url} alt="" />
      </header>

      <section className="flex-1 text-sm sm:text-base">
        <Link
          to={`/tracks/${track.id}`}
          className="font-semibold line-clamp-1 hover:underlin"
        >
          {track.name}
        </Link>
        <section className="line-clamp-2">
          {track.artists.map((artist, index) => (
            <Link
              key={artist.id}
              to={`/artists/${artist.id}`}
              className="inline text-slate-400 font-light line-clamp-1 hover:underline"
            >
              {artist.name}
              {index < track.artists.length - 1 && ", "}
            </Link>
          ))}
        </section>
      </section>

      <section className="flex items-center gap-2">
        <button onClick={handlePlaySong} className="group">
          <PlayIcon />
        </button>
        <button
          onClick={
            () => addTrackToPlaylist(track) // add
          }
          className="group"
        >
          <PlusIcon />
        </button>
      </section>
    </article>
  );
};
export default TrackDefaultCard;
