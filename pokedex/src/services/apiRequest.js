import axios from "axios";
//responsible for requisitions

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

//It gets the data of each pokemon

async function pokemonsData(pokemons) {
  const data = await Promise.all(
    pokemons.map(async (pokemon) => {
      try {
        const response = await axios.get(`${pokemon.url}`);
        return (response.data);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
  return data;
}

//Function responsible for get a list of pokemons from API's endpoint or localStorage.
export async function getPokemonsData() {
  try {
    const response = await axios.get(`${BASE_URL}`);
    const data = await pokemonsData(response.data.results);
    return data;
  } catch (error) {
    alert("Erro ao buscar lista de Pokemons", error);
    throw new Error(error);
  }
}
