import { Link, useParams } from "react-router-dom";
import ContainerMusic from "../components/layout/ContainerMusic";
import { useEffect, useRef, useState } from "react";
import {
  PencilIcon,
  SaveIcon,
  ShareIcon,
  TrashIcon,
} from "../components/shared/Icons";
import { axiosMusic } from "../config/axios.config";
import ListPlaylistDetail from "../components/playlistDetail.jsx/ListPlaylistDetail";

const PlaylistDetail = () => {
  const [isShowingSideA, setIsShowingSideA] = useState(true);
  const [playlistInfo, setPlaylistInfo] = useState(null);

  const { id } = useParams();

  const formRef = useRef(null);

  const handleDeleteTrackFromPlaylist = (trackId) => {
    axiosMusic
      .delete(`/api/playlists/${playlistInfo.id}/tracks/${trackId}`)
      .then(() => {
        const newTracks = (playlistInfo.tracks = playlistInfo.tracks.filter(
          (track) => track.id !== trackId
        ));
        setPlaylistInfo({ ...playlistInfo, tracks: newTracks });
      })
      .catch((err) => console.log(err));
  };

  const handleDeletePlaylist = () => {
    axiosMusic
      .delete(`/api/playlists/${id}`)
      .then(() => (window.location.href = "/playlists"))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    axiosMusic
      .patch(`/api/playlists/${id}`, formData)
      .then(() => {
        alert("Playlist updated");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosMusic
      .get(`/api/playlists/${id}`)
      .then(({ data }) => setPlaylistInfo(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (playlistInfo) {
      formRef.current.playlistDetailTitle.value = playlistInfo.title;
      formRef.current.playlistDetailTo.value = playlistInfo.to;
      formRef.current.playlistDetailMessage.value = playlistInfo.message;
    }
  }, [playlistInfo]);

  return (
    <ContainerMusic>
      <Link to={-1}>{"<<"}Back</Link>

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

      <button
        className="max-w-max mx-auto block my-4"
        type="button"
        onClick={() => setIsShowingSideA(!isShowingSideA)}
      >
        {isShowingSideA ? "Flip to side B" : "Flip to side A"}
      </button>
      <ListPlaylistDetail
        tracks={playlistInfo?.tracks || []}
        handleDeleteTrackFromPlaylist={handleDeleteTrackFromPlaylist}
        showDeleteBtn={true}
      />
    </ContainerMusic>
  );
};
export default PlaylistDetail;
