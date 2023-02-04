import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { handlePokedex } from "../../routes/cordinator";
import { MainPage } from "../PokedexPage/style";

function PokemonsListPage() {
  const navigate = useNavigate();
  const headerProps = {
    page: "pokemonsList",
    buttonFunction: () => handlePokedex(navigate),
    textButton: "Pokedex",
  };
  return (
    <>
      <Header headerProps={headerProps} />
      <MainPage>
        <h1>Todos os Pokemons</h1>
      </MainPage>
    </>
  );
}
export default PokemonsListPage;
