import { PlusIcon, ShareIcon } from "../shared/Icons";

const FormPublicPlaylist = ({ formRef, isShowingSideA, handleCopyLink }) => {
  return (
    <form
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
            disabled
          />
        </div>
        <button
          type="button"
          className="absolute right-14 bottom-5 hover:border-yellow-border  group transition-colors cursor-pointer"
        >
          <PlusIcon width={32} />
        </button>
        <button
          type="button"
          onClick={handleCopyLink}
          className="absolute right-5 bottom-5 hover:border-yellow-border  group transition-colors"
        >
          <ShareIcon />
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
            disabled
          />
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
            disabled
          />
        </div>
      </div>
    </form>
  );
};
export default FormPublicPlaylist;
