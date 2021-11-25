// Hooks
import { PokemonInterface } from "../models/Interfaces";

// Interfaces
import { useState, useEffect } from "react";
// API
import API from "../models/API";

// Props
type props = {
  pokemonID: Number;
};

export const usePokemon = ({ pokemonID }: props) => {
  const [pokemon, setPokemon] = useState<PokemonInterface>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);

  useEffect(() => {
    const fetchPokemonUsingID = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const data: PokemonInterface = await API.fetchDetailedPokemon(
          pokemonID
        );

        setPokemon(data);
        setIsLoading(false);
      } catch (e) {
        setError(true);
      }

      setIsLoading(false);
    };

    fetchPokemonUsingID();
  }, [setError, setIsLoading, setPokemon, pokemonID]);

  return { pokemon, isLoading, error };
};
