import { useContext } from "react";

import { GlobalContext } from "../../global/GlobalContext";
import Header from "../../components/Header";
import {
  MainPage,
  PageTitle,
  PokemonsCardContainer,
} from "../PokemonsListPage/style";

import PokemonCard from "../../components/PokemonCard";

function PokedexPage() {
  const { pokemonsList, setPokemonsList, loading, setLoading } =
    useContext(GlobalContext);

  function renderPokemons() {
    return pokemonsList?.map(({ order, name, sprites, types }) => {
      return (
        <PokemonCard
          pokemon={{ order, name, sprites, types }}
          key={{ order }}
          page="pokedex"
        />
      );
    });
  }

  return (
    <>
      <Header page="pokedex" />
      <MainPage>
        <PageTitle>Meus pokemons</PageTitle>
        <PokemonsCardContainer>{renderPokemons()}</PokemonsCardContainer>
      </MainPage>
    </>
  );
}
export default PokedexPage;
