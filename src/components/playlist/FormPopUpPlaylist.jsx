import usePopUpPlaylist from "../../hooks/popUpPlaylist/usePopUpPlaylist";
import { PencilIcon } from "../shared/Icons";

const FormPopUpPlaylist = ({
  handleSubmit,
  isShowingSideA,
  setIsShowingSideA,
}) => {
  return (
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
  );
};
export default FormPopUpPlaylist;
