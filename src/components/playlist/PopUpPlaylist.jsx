import { PencilIcon } from "../shared/Icons";
import "./PopUpPlaylist.css";
import ListCartPlaylist from "./ListCartPlaylist";

import usePopUpPlaylist from "../../hooks/popUpPlaylist/usePopUpPlaylist";

const PopUpPlaylist = ({ isShowing }) => {
  const { isShowingSideA, setIsShowingSideA, handleSubmit, tracksInPlaylist } =
    usePopUpPlaylist();

  const position = isShowing ? "right-4" : "-right-full";

  return (
    <article
      className={`absolute w-[271.6px] transition-[right] -bottom-4 z-10 
      translate-y-full grid bg-purple-light p-4 gap-2 rounded-lg border border-yellow-border ${position}`}
    >
      <form
        onSubmit={handleSubmit}
        id="formPlaylistCart"
        className={`relative card  ${isShowingSideA ? "sideA" : "sideB"}`}
      >
        <div className="relative front_cassette">
          <img className="mx-auto" src="/images/cassette.png" alt="" />
          <div
            className="flex items-center gap-2 bg-white absolute top-4 left-[21px] rounded-md
          px-2 w-[195px]
           "
          >
            <input
              className="text-black bg-transparent outline-none p-1 text-sm flex-1"
              type="text"
              placeholder="Title playlist"
              size="10"
              name="title"
              required
              onFocus={() => setIsShowingSideA(true)}
            />
            <label>
              <PencilIcon />
            </label>
          </div>
        </div>

        <div className="absolute top-0 back_cassette">
          <img className="mx-auto" src="/images/cassette.png" alt="" />
          <div
            className="flex items-center gap-2 bg-white absolute top-4 left-[21px] rounded-md
          px-2 w-[195px]
           "
          >
            <input
              className="text-black bg-transparent outline-none p-1 text-sm flex-1"
              type="text"
              placeholder="To..."
              size="10"
              name="to"
              required
              onFocus={() => setIsShowingSideA(false)}
            />
            <label>
              <PencilIcon />
            </label>
          </div>
          <div
            className="flex items-center gap-2 bg-white absolute top-12 left-[21px] rounded-md
          px-2 w-[195px]
           "
          >
            <textarea
              className="text-black bg-transparent outline-none p-1 text-sm flex-1 resize-none"
              type="text"
              placeholder="Message..."
              size="10"
              rows="4"
              name="message"
              required
              onFocus={() => setIsShowingSideA(false)}
            />
          </div>
        </div>
      </form>

      <button type="button" onClick={() => setIsShowingSideA(!isShowingSideA)}>
        {isShowingSideA ? "Flip to side B" : "Flip to side A"}
      </button>

      <ListCartPlaylist tracks={tracksInPlaylist} />
      <button form="formPlaylistCart">Create</button>
    </article>
  );
};
export default PopUpPlaylist;
