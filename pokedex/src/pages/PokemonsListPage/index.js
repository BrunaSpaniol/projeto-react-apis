import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PokemonCard from "../../components/PokemonCard";
import { ContainerListPage, MainPage, PageTitle } from "./style";
import { handlePokedex } from "../../routes/cordinator";


function PokemonsListPage() {
  const navigate = useNavigate();
  const headerProps = {
    page: "pokemonsList",
    buttonFunction: () => handlePokedex(navigate),
    textButton: "Pokedex",
  };
  return (
    <ContainerListPage>
      <Header headerProps={headerProps} />
      <MainPage>
        <PageTitle>Todos os Pokemons</PageTitle>
        <PokemonCard/>
        <PokemonCard/>
      </MainPage>
    </ContainerListPage>
  );
}
export default PokemonsListPage;
