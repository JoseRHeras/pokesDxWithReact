// Hooks
import { useEffect, useState } from "react";

// API
import API from "../models/API";

// Interfaces
import { DetailedPokemonData } from "../models/Interfaces";

type Props = {
  pokemonID: string;
};

export const usePokemonFetch = ({ pokemonID }: Props) => {
  const [pokemon, setPokemon] = useState<DetailedPokemonData>({
    id: 1,
    name: "",
    sprites: { front_default: "" },
  });
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setError(false);

    const fetchPokemon = async () => {
      try {
        setError(false);
        setLoading(true);

        const data = await API.fetchPokemon(pokemonID);

        setPokemon(data);

        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };

    fetchPokemon();
  }, [pokemonID]);

  return { pokemon, error, loading };
};
