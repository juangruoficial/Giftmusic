import { Link } from "react-router-dom";
import { LogoutIcon, MinimalPlayIcon, PlaylistIcon } from "../shared/Icons";
import { useUserInfo } from "../../store/userInfo";
import { useState } from "react";
import PopUpPlaylist from "../playlist/PopUpPlaylist";
import { usePlaylistCart } from "../../store/playlistCart";

const PrincipalLayout = ({ children }) => {
  const [isShowingOptions, setIsShowingOptions] = useState(false);
  const [isShowingCurrentPlaylist, setIsShowingCurrentPlaylist] =
    useState(false);

  const logout = useUserInfo((state) => state.logout);
  const myPlaylists = usePlaylistCart((state) => state.tracks);

  return (
    <section
      className="min-h-screen font-urbanist bg-purple-bg text-white 
    bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat sm:justify-center 
    sm:bg-[url(/images/bg-auth-desktop.png)] overflow-hidden"
    >
      <header className="flex p-2 justify-between items-center bg-purple-dark sm:text-lg relative">
        <Link to={"/"} className="uppercase font-semibold">
          Gift Music
        </Link>

        <section
          className="flex gap-4 [&>button]:border [&>button]:py-1 [&>button]:px-2 [&>button]:text-sm 
        [&>button]:rounded-full [&>button]:font-semibold [&>button]:border-yellow-border [&>button]:uppercase"
        >
          <button
            onClick={() => setIsShowingOptions(!isShowingOptions)}
            className="hover:bg-purple-light transition-colors"
          >
            My account
          </button>
          <button
            onClick={() =>
              setIsShowingCurrentPlaylist(!isShowingCurrentPlaylist)
            }
            className="flex gap-3 items-center sm:gap-2 hover:bg-purple-light transition-colors "
          >
            <PlaylistIcon />
            <span className="hidden sm:inline">Recording</span>
            {myPlaylists.length > 0 && (
              <span className="bg-yellow-border text-black text-xs rounded-full px-1">
                {myPlaylists.length}
              </span>
            )}
          </button>
        </section>

        {/* pOPuPpLAYLIST */}
        <PopUpPlaylist isShowing={isShowingCurrentPlaylist} />
        {/* PopUp AUTH */}
        <article
          className={`absolute  transition-[right] -bottom-4 translate-y-full grid 
          bg-purple-light p-4 gap-2 rounded-lg border border-yellow-border ${
            isShowingOptions ? "right-4" : "-right-full"
          } `}
        >
          <Link
            to={"/playlists"}
            className="flex gap-2 items-center font-semibold uppercase hover:text-yellow-border group"
          >
            <MinimalPlayIcon />
            My records
          </Link>
          <button
            onClick={logout}
            className="flex gap-2 items-center font-semibold uppercase hover:text-yellow-border group"
          >
            <LogoutIcon />
            Logout
          </button>
        </article>
      </header>

      <section className="flex justify-center items-center pt-10 px-4">
        {children}
      </section>
    </section>
  );
};
export default PrincipalLayout;
