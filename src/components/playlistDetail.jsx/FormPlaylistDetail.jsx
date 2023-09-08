import { Link } from "react-router-dom";
import { PencilIcon, SaveIcon, ShareIcon, TrashIcon } from "../shared/Icons";

const FormPlaylistDetail = ({
  handleDeletePlaylist,
  handleSubmit,
  formRef,
  id,
  setIsShowingSideA,
  isShowingSideA,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      id="formPlaylistCart"
      className={`relative card w-[238px] mx-auto ${
        isShowingSideA ? "sideA" : "sideB"
      }`}
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
            id="playlistDetailTitle"
            required
            onFocus={() => setIsShowingSideA(true)}
          />
          <label>
            <PencilIcon />
          </label>
        </div>
        <Link
          target="_blank"
          to={`/playlists/public/${id}`}
          className="absolute right-5 bottom-5 hover:border-yellow-border  group transition-colors"
        >
          <ShareIcon />
        </Link>

        <button
          type="submit"
          to={`/playlists/public/${id}`}
          className="absolute left-5 bottom-5 hover:border-yellow-border  group transition-colors cursor-pointer"
        >
          <SaveIcon />
        </button>

        <button
          type="button"
          onClick={handleDeletePlaylist}
          to={`/playlists/public/${id}`}
          className="absolute left-14 bottom-5 hover:border-yellow-border  group transition-colors cursor-pointer"
        >
          <TrashIcon />
        </button>
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
            id="playlistDetailTo"
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
            id="playlistDetailMessage"
            required
            onFocus={() => setIsShowingSideA(false)}
          />
        </div>
      </div>
    </form>
  );
};
export default FormPlaylistDetail;
