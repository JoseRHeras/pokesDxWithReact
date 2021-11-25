// Components
import Grid from "../Grid";
import SearchBar from "../SearchBar";

// Hooks
import { useHome } from "../../hooks/useHome";

// Images
import NoImage from "../../images/pokeball.png";
import Button from "../Button";
import CharacterCard from "../CharacterCard";
import { randomInt } from "crypto";


const HomePage = () => {
  const {
    state,
    error,
    loading,
    setIsLoadingMore,
    setSearchTerm,
  } = useHome();

  return (
    <>
      <SearchBar handleSearchTerm={setSearchTerm} />

      {error && <div> Results not found </div>}

      {loading ? (
        <div>Is Loading</div>
      ) : (
        <Grid
          title={state.results.length > 1 ? "Pokemons" : "Pokemon"}
          children={state.results.map((pokemon) => (
            <CharacterCard
              imageUrl={
                !pokemon.sprites.front_default
                  ? NoImage
                  : pokemon.sprites.front_default
              }
              name={pokemon.name}
              id={pokemon.id}
              key={`${pokemon.id}${randomInt}`}
            />
          ))}
        ></Grid>
      )}

      {!error && !loading && state?.next && state.results.length > 1 && (
        <Button text={`Load More`} handleClick={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default HomePage;
