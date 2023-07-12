import { useNavigate, useLocation } from "react-router-dom";
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

function Header() {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <HeaderContainer>
      {location.pathname !== "/" && (
        <>
          <ReturnIcon
            alt={"ícone para voltar à página anterior"}
            src={returnIcon}
          />
          <ButtonReturnPage onClick={() => handleHome(navigate)}>
            {"Todos Pokémons"}
          </ButtonReturnPage>
        </>
      )}
      <LogoPokemon src={logo} alt="" />
      {location.pathname === "/" && (
        <ButtonGoToPage onClick={() => handlePokedex(navigate)}>
          {"Pokedex"}
        </ButtonGoToPage>
      )}
      {location.pathname === "/detail" && (
        <ButtonRemovePokedex onClick={() => handleHome(navigate)}>
          {"Excluir da Pokedex"}
        </ButtonRemovePokedex>
      )}
    </HeaderContainer>
  );
}
export default Header;
