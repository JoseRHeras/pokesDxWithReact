// Styles
import { Wrapper, Content } from "./Pokemon.styles";

// Images
import NoImage from "../../images/pokemon.png";

// Hooks
import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import Card from "../Card";
import Grid from "../Grid";

const Pokemon = () => {
  // Retrieving ID
  const { id } = useParams();
  const poID: Number = !id ? 1 : Number.parseInt(id);
  const { pokemon, isLoading, error } = usePokemon({ pokemonID: poID });

  if (error) return <div>Error Happened</div>;
  if (isLoading) return <div>Page is loading</div>;

  return (
    <Wrapper>
      <Content> 
        <div className="card">
          <Card
            imageUrl={
              !pokemon?.sprites.front_default
                ? NoImage
                : pokemon.sprites.front_default
            }
          />

          <div className="card_data">
            <h2>{pokemon?.name}</h2>
            <div>Base Experience: {pokemon?.base_experience}</div>
            <div>Height: {pokemon?.height}</div>
            <div>Species Name: {pokemon?.species.name}</div>
          </div>
        </div>

        <div className="stats">
          <div className="item_list">
            {!pokemon?.moves ? (
              <div>No Moves Found</div>
            ) : (
              <Grid
                title="Moves"
                children={pokemon.moves.map(({ move }) => {
                  return <div className="data" key={move.name}>{move.name}</div>;
                })}
              />
            )}
          </div>

          <div className="item_list">
            {!pokemon?.abilities ? (
              <div>No Abilites Found</div>
            ) : (
              <Grid
                title="Abilities"
                children={pokemon.abilities.map(({ ability }) => {
                  return <div className="data" key={ability.name}>{ability.name}</div>;
                })}
              />
            )}
          </div>

          <div className="item_list">
            {!pokemon?.types ? (
              <div>No type(s) found</div>
            ) : (
              <Grid
                title="Types"
                children={pokemon.types.map(({ type }) => {
                  return <div className="data" key={type.name}>{type.name}</div>;
                })}
              />
            )}
          </div>

        </div>

      </Content>
    </Wrapper>
  );
};

export default Pokemon;
