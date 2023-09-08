import TrackDefaultCard from "./TrackDefaultCard";

const ListTrackDefault = ({ tracks, setCurrentTrack }) => {
  return (
    <section className="grid gap-2 pt-6">
      {tracks.map((track) => (
        <TrackDefaultCard
          key={track.id}
          track={track}
          setCurrentTrack={setCurrentTrack}
        />
      ))}
    </section>
  );
};
export default ListTrackDefault;
