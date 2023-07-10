import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

import { getPokemonsData } from "../services/apiRequest";

export const GlobalState = ({ children }) => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fecthPokemons = async () => {
    try {
      setPokemonsList(...pokemonsList, await getPokemonsData());
      setLoading(true);
    } catch (error) {
      console.log("erro ao buscar Pokemon");
      console.log(error);
    }
  };

  useEffect(() => {
    fecthPokemons();
  }, []);

  const data = {
    fecthPokemons,
    pokemonsList, 
    setPokemonsList,
    loading,
    setLoading
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
