import { useContext } from "react";
import Header from "../../components/Header";
import PokemonCard from "../../components/PokemonCard";
import { ContainerListPage, MainPage, PageTitle, PokemonsCardContainer } from "./style";
import { GlobalContext } from "../../global/GlobalContext";

function PokemonsListPage() {
  const { pokemonsList, setPokemonsList, loading, setLoading } =
    useContext(GlobalContext);

  function renderPokemons() {
    return pokemonsList?.map(({ order, name, sprites, types }) => {
      return (
        <PokemonCard
          pokemon={{ order, name, sprites, types }}
          key={{ order }}
          page="pokemonsList"
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
