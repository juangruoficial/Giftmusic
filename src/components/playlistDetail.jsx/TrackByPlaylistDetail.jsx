import { Link } from "react-router-dom";
import { DeleteIcon } from "../shared/Icons";

const TrackByPlaylistDetail = ({ track, handleDeleteTrackFromPlaylist }) => {
  return (
    <article
      key={track.id}
      className="flex items-center gap-2 hover:bg-white/20 p-1 rounded-md pr-2 transition-colors"
    >
      <header className="rounded-md overflow-hidden W-[45PX]">
        <img src={track.album.images[2]?.url} alt="" />
      </header>

      <section className="flex-1 text-sm sm:text-base">
        <Link
          to={`/tracks/${track.id}`}
          className="font-semibold line-clamp-1 hover:underline"
        >
          {track.name}
        </Link>
        <section className="line-clamp-2">
          {track.artists.map((artist, index) => (
            <Link
              key={artist.id}
              to={`/artists/${artist.id}`}
              className="text-slate-300 font-light line-clamp-1 hover:underline text-xs"
            >
              {artist.name}
              {index < track.artists.length - 1 && ", "}
            </Link>
          ))}
        </section>
      </section>

      <section className="flex items-center gap-2">
        <button
          onClick={() => handleDeleteTrackFromPlaylist(track.id)}
          className="group"
        >
          <DeleteIcon />
        </button>
      </section>
    </article>
  );
};
export default TrackByPlaylistDetail;
