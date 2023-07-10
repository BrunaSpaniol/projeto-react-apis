import { useNavigate } from "react-router-dom";
import { handleHome, handlePokedex } from "../../routes/cordinator";

import logo from "../../assets/pokemonLogo.svg";
import returnIcon from "../../assets/returnIcon.svg";
import {
  HeaderContainer,
  ButtonGoToPage,
  ButtonReturnPage,
  ButtonRemovePokedex,
  LogoPokemon,
  ReturnIcon,
} from "./style";

function Header({ page }) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {page !== "pokemonsList" && (
        <>
        <ReturnIcon alt={"ícone para voltar à página anterior"} src={returnIcon}/>
          <ButtonReturnPage onClick={() => handleHome(navigate)}>
            {"Todos Pokémons"}
          </ButtonReturnPage>
        </>
      )}
      <LogoPokemon src={logo} alt="" />
      {page === "pokemonsList" && (
        <ButtonGoToPage onClick={() => handlePokedex(navigate)}>
          {"Pokedex"}
        </ButtonGoToPage>
      )}
      {page === "pokemonsDetails" && (
        <ButtonRemovePokedex onClick={() => handleHome(navigate)}>
          {"Excluir da Pokedex"}
        </ButtonRemovePokedex>
      )}
    </HeaderContainer>
  );
}
export default Header;
