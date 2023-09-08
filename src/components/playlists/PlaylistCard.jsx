import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist, index }) => {
  const topDistance = index * 55;

  return (
    <Link
      to={`/playlists/${playlist.id}`}
      className="absolute front_cassette hover:-translate-y-4 transition-transform hover:rotate-2 cursor-pointer"
      style={{ top: `${topDistance}px` }}
    >
      <img className="mx-auto" src="/images/cassette.png" alt="" />
      <div
        className="flex items-center gap-2 bg-white absolute top-4 left-[21px] rounded-md
          px-2 w-[195px]
           "
      >
        <input
          className="text-black bg-transparent outline-none p-1 text-sm flex-1 line-clamp-1"
          type="text"
          placeholder="Title playlist"
          size="10"
          name="title"
          value={playlist.title}
          required
          readOnly
        />
      </div>
    </Link>
  );
};
export default PlaylistCard;
