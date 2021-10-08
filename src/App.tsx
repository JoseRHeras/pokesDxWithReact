import ListPokemon from "./components/ListPokemon";
import Pagination from "./components/Pagination";
import usePaginationFromUrl from "./models/AxiosPokemon";

export interface Pokemon {
  pokemons: {
    name:string
  }[]
}

function App() {

  const pokemonCall = usePaginationFromUrl("https://pokeapi.co/api/v2/pokemon")

  // if(pokemonCall.loading) return(
  //   <div>Loading</div>
  // )

  return (

    <div className="App">
        <ListPokemon pokemons={pokemonCall.data}/>
    
        <Pagination 
          previous={pokemonCall.handlePreviousRequest} 
          next={pokemonCall.handleNextRequest}
        />
    </div>
  );
}

export default App;
