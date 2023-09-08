import ContainerMusic from "../components/layout/ContainerMusic";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosMusic } from "../config/axios.config";
import SwiperList from "../components/trackDetail/SwiperList";
import ListTracksDefault from "../components/shared/ListTrackDefault";
const ArtistDetail = () => {
  const [artist, setArtist] = useState(null);
  const formatNumberWithUnits = (number) => {
    if (number > 1000000) {
      return `${(number / 1000000).toFixed(2)} M`;
    }
    if (number > 1000) {
      return `${(number / 1000).toFixed(2)} K`;
    }
    return number.toString();
  };

  const { id } = useParams();

  useEffect(() => {
    axiosMusic
      .get(`/api/artists/${id}`)
      .then(({ data }) => setArtist(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ContainerMusic>
      <Link
        to={-1}
        className="text-slate-400 hover:text-yellow-border transition-colors block  mb-4"
      >
        {"<<"} Back
      </Link>

      <header className="grid gap-4 sm:grid-cols-2 sm:items-center">
        <div className="rounded-xl overflow-hidden sm:rounded-full sm:w-full sm:aspect-square">
          <img
            className="w-full h-full object-cover"
            src={artist?.images[1].url}
            alt=""
          />
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            {artist?.name}
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="text-gray-800 dark:text-white font-semibold mr-2">
                Followers:
              </span>
              <span className="text-gray-700 dark:text-gray-400">
                {formatNumberWithUnits(artist?.followers.total ?? 0) /* 1.2M */}
              </span>
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="text-gray-800 dark:text-white font-semibold mr-2">
                Popularity:
              </span>
              <span className="text-gray-700 dark:text-gray-400">
                {artist?.popularity}
              </span>
            </li>
          </ul>

          <section>
            <h4 className="font font-semibold">Genres</h4>
            <ul className="flex flex-wrap gap-2 mt-2">
              {artist?.genres.slice(0, 3)?.map((genre) => (
                <li
                  className="capitalize border border-purple-500 p-1 px-2 rounded-full"
                  key={genre}
                >
                  {genre}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </header>

      <section className="mt-4">
        <h3 className="text-xl font-semibold">
          Other {artist?.name}
          {"'s albums"}
        </h3>

        <SwiperList albums={artist?.albums ?? []} />
      </section>
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Top Tracks</h3>
        <ListTracksDefault tracks={artist?.songsTop ?? []} />
      </section>
    </ContainerMusic>
  );
};
export default ArtistDetail;
