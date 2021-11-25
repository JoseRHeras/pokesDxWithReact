import { useEffect, useState } from "react";

// Intefaces
import {
  PokemonList,
} from "../models/Interfaces";

// API
import API from "../models/API";

// Config
import { isSessionPersistent } from "../helpers";

// Initial State
const initialState: PokemonList = {
  next: "",
  results: []
}

export const useHome = () => {
  const [state, setState] = useState<PokemonList>(initialState);
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<Boolean>(false);

  // SearchBar State
  const [searchTerm, setSearchTerm] = useState<string>("");


  const fetchStateData = async (url: string | null = "", searchTerm: string) => {
    try {
      setLoading(true);
      setError(false);

      const data = await API.fetchHomePageData(url, searchTerm);

      setState((oldState) => ({
        ...data, results: [...oldState.results, ...data.results]
      }));
    
    } catch (e) {
      setError(true)
    }
    setLoading(false)
  }

  // Initial Setup and Search
  useEffect(() => {
    if (!searchTerm) {
      const data = isSessionPersistent("home-state")

      if (data) {
        setState(data);
        setLoading(false);
        return
      }
    };

    setState(initialState)
    fetchStateData(searchTerm, searchTerm)

  }, [searchTerm])

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchStateData(state.next, searchTerm)
    setIsLoadingMore(false);
  }, [isLoadingMore, state.next, searchTerm]);


  // Save state
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("home-state", JSON.stringify(state))
    }
  }, [searchTerm, state]);



  return {
    state,
    error,
    loading,
    setIsLoadingMore,
    setSearchTerm,
  };
};
