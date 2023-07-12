import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

import { getPokemonsData } from "../services/apiRequest";

export const GlobalState = ({ children }) => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

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


  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  const data = {
    fecthPokemons,
    pokemonsList,
    pokedex,
    loading,
    addToPokedex,
    removeFromPokedex,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
