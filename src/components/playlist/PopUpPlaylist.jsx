import "./PopUpPlaylist.css";
import ListCartPlaylist from "./ListCartPlaylist";

import usePopUpPlaylist from "../../hooks/popUpPlaylist/usePopUpPlaylist";
import FormPopUpPlaylist from "./FormPopUpPlaylist";

const PopUpPlaylist = ({ isShowing }) => {
  const { isShowingSideA, setIsShowingSideA, handleSubmit, tracksInPlaylist } =
    usePopUpPlaylist();

  const position = isShowing ? "right-4" : "-right-full";

  return (
    <article
      className={`absolute w-[271.6px] transition-[right] -bottom-4 z-10 
      translate-y-full grid bg-purple-light p-4 gap-2 rounded-lg border border-yellow-border ${position}`}
    >
      <FormPopUpPlaylist
        handleSubmit={handleSubmit}
        isShowingSideA={isShowingSideA}
        setIsShowingSideA={setIsShowingSideA}
      />

      <button
        className="hover:scale-90  transition-colors w-1/2 mx-auto block text-white font-semibold py-1 rounded-md"
        type="button"
        onClick={() => setIsShowingSideA(!isShowingSideA)}
      >
        {isShowingSideA ? "Flip to side B" : "Flip to side A"}
      </button>

      <ListCartPlaylist tracks={tracksInPlaylist} />
      <button
        className="hover:scale-90 bg-purple-dark transition-colors w-1/2 mx-auto block text-white font-semibold py-1 rounded-md"
        form="formPlaylistCart"
      >
        Create
      </button>
    </article>
  );
};
export default PopUpPlaylist;
