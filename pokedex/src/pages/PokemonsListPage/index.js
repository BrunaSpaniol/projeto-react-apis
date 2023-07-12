import { useContext, useMemo } from "react";
import Header from "../../components/Header";
import PokemonCard from "../../components/PokemonCard";
import {
  ContainerListPage,
  MainPage,
  PageTitle,
  PokemonsCardContainer,
} from "./style";
import { GlobalContext } from "../../global/GlobalContext";

function PokemonsListPage() {
  const { pokemonsList, pokedex, addToPokedex, removeFromPokedex } =
    useContext(GlobalContext);

  const filteredPokelist = useMemo(
    () =>
      pokemonsList.filter(
        (pokemonInList) =>
          !pokedex.find(
            (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
          )
      ),
    [pokemonsList, pokedex]
  );

  function renderPokemons() {
    return filteredPokelist?.map(({ order, name, sprites, types }) => {
      return (
        <PokemonCard
          pokemon={{ order, name, sprites, types }}
          key={Math.random()}
          addToPokedex={addToPokedex}
          removeFromPokedex={removeFromPokedex}
        />
      );
    });
  }

  return (
    <ContainerListPage>
      <Header page="pokemonsList" />
      <MainPage>
        <PageTitle>Todos os Pokemons</PageTitle>
        <PokemonsCardContainer>{renderPokemons()}</PokemonsCardContainer>
      </MainPage>
    </ContainerListPage>
  );
}
export default PokemonsListPage;
