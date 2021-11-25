export interface PokemonList {
  next: string | null;
  results: DetailedPokemonData[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface DetailedPokemonData {
  name: string;
  id: number;
  sprites: {
    front_default: string | null;
  };
}

export type DetailedPokemonDataArray = DetailedPokemonData[];

// Pokemon Complete Data Card

interface Ability {
  ability: { name: string };
}

interface Move {
  move: { name: string };
}

interface Type {
  type: {
    name: string;
  };
}

export interface PokemonInterface {
  abilities: Array<Ability>;
  base_experience: Number;
  height: Number;
  is_default: boolean;
  moves: Array<Move>;
  name: string;
  species: { name: string };
  sprites: {
    front_default: string | null;
  };
  types: Array<Type>;
  weight: Number;
}
