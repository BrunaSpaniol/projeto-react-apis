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
  const { pokedex,  addToPokedex, removeFromPokedex} = useContext(GlobalContext);

  function renderPokemons() {
    return pokedex?.map(({ order, name, sprites, types }) => {
      return (
        <PokemonCard
          pokemon={{ order, name, sprites, types }}
          key={{ order }}
          page="pokedex"
          addToPokedex={addToPokedex}
          removeFromPokedex={removeFromPokedex}
        />
      );
    });
  }

  return (
    <>
      <Header page="pokedex" />
      <MainPage>
        <PageTitle>Meus Pokemons</PageTitle>
        <PokemonsCardContainer>{renderPokemons()}</PokemonsCardContainer>
      </MainPage>
    </>
  );
}
export default PokedexPage;
