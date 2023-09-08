import { Link } from "react-router-dom";
import ContainerMusic from "../components/layout/ContainerMusic";
import { SearchIcon } from "../components/shared/Icons";
import PlaylistList from "../components/playlists/PlaylistList";
import { useEffect, useState } from "react";
import { axiosMusic } from "../config/axios.config";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axiosMusic
      .get("/api/playlists/me")
      .then(({ data }) => setPlaylists(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContainerMusic>
      <Link to={-1} className="text-slate-300 hover:underline">
        Back
      </Link>
      <h1>Playlists</h1>
      <header className="text-lg">
        <form className="bg-purple-dark p-2 rounded-md flex gap-2 items-center">
          <button>
            <SearchIcon />
          </button>
          <input
            className="bg-transparent flex-1"
            type="text"
            placeholder="Search..."
            size={10}
            id="home_search"
            autoComplete="off"
          />
        </form>
      </header>
      <PlaylistList playlists={playlists || []} />
    </ContainerMusic>
  );
};
export default Playlists;
