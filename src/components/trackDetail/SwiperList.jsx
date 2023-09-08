import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
const SwiperList = ({ albums }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="mySwiper mt-4"
    >
      {albums?.map((album) => (
        <SwiperSlide key={album.id}>
          <article>
            <header className="rounded-xl overflow-hidden">
              <img
                className="w-full aspect-square object-cover"
                src={album.images[1].url}
                alt="albumphoto"
              />
            </header>

            <h4 className="font-semibold mt-2  line-clamp-1">{album.name}</h4>
            {album.artists.map((artist) => (
              <h5
                key={artist.id}
                className="font-light text-slate-400 line-clamp-1"
              >
                {artist.name}
              </h5>
            ))}
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SwiperList;
