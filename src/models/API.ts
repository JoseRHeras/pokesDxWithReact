// Configuration
import { SEARCH_A_POKEMON, DETAILED_POKEMON, PAGINATION_LIST } from "./Config";

// Interfaces
import {
  PokemonList,
  DetailedPokemonData,
  PokemonInterface,
} from "./Interfaces";

const apiSettings = {

  fetchHomePageData: async (url: string | null, searchTerm: string) => {

    if (searchTerm) {
      let pokemon = await apiSettings.fetchPokemon(searchTerm);
      return { next: "", results: [pokemon] } as PokemonList;
    }

    const endpoint = url ? url : PAGINATION_LIST;
    return await apiSettings.fetchPaginationLink(endpoint)
  },


  fetchPokemon: async (
    name: string,
    id?: string
  ): Promise<DetailedPokemonData> => {
    const link = name
      ? `${SEARCH_A_POKEMON}${name}`
      : `${SEARCH_A_POKEMON}${id}`;

    const data = await fetch(link);
    return await data
      .json()
      .then(({ name, id, sprites }: DetailedPokemonData) => {
        return { name, id, sprites };
      });
  },

  fetchPaginationLink: async (url: string | null = ""): Promise<PokemonList> => {
    if (url === null) return { next: null, results: [] };

    const response = await fetch(url);
    const mappedRespose = await response.json().then(({ next, results }): PokemonList => {
      return { next, results };
    });

    const detailedPokemonList = await Promise.all(mappedRespose.results.map(async ({ name }) => {
      return await apiSettings.fetchPokemon(name)
    }))

    return { ...mappedRespose, results: detailedPokemonList }

  },



  fetchDetailedPokemon: async (pokemonID: Number) => {
    const url = `${DETAILED_POKEMON}${pokemonID}`;
    const data = await fetch(url);

    return await data
      .json()
      .then(
        ({
          abilities,
          base_experience,
          height,
          is_default,
          moves,
          name,
          species,
          sprites,
          types,
          weight,
        }: PokemonInterface) => {
          return {
            abilities,
            base_experience,
            height,
            is_default,
            moves,
            name,
            species,
            sprites,
            types,
            weight,
          };
        }
      );
  },
};

export default apiSettings;
