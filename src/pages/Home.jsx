import ContainerMusic from "../components/layout/ContainerMusic";
import { SearchIcon } from "../components/shared/Icons";
import ListTrackDefault from "../components/shared/ListTrackDefault";
import { optionsLimit } from "../components/shared/constOptionLimit";
import useHome from "../hooks/home/useHome";
const Home = () => {
  const { handleSubmit, handleLimitChange, tracksToShow, limitTracks } =
    useHome();

  return (
    <ContainerMusic>
      <header className="text-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-purple-dark p-2 rounded-md flex gap-2 items-center"
        >
          <button>
            <SearchIcon />
          </button>
          <input
            className="bg-transparent flex-1"
            type="text"
            placeholder="Search..."
            size={10}
            id="home_search"
            autoComplete="off"
          />
          <select
            onChange={handleLimitChange}
            value={limitTracks}
            className="bg-transparent outline-none"
          >
            {optionsLimit.map((option) => (
              <option
                className="bg-purple-dark text-white option-bg-color"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </form>
      </header>

      <ListTrackDefault tracks={tracksToShow} />
    </ContainerMusic>
  );
};
export default Home;
