import { useNavigate } from "react-router-dom";
import logo from "../../assets/pokemonLogo.svg";
import { HeaderContainer, ButtonGoToPage, ButtonReturnPage } from "./style";
import { handleHome } from "../../routes/cordinator";

function Header({ headerProps }) {
    const navigate = useNavigate()
  const {
    page,
    buttonFunction,
    textButton,
    buttonFunctionDelete,
    textButtonDelete,
  } = headerProps;

  return (
    <HeaderContainer>
      {page !== "pokemonsList" && (
        <ButtonReturnPage onClick={() => handleHome(navigate)}>
          {'Todos Pokémons'}
        </ButtonReturnPage>
      )}
      <img src={logo} alt="" />
      {page !== "pokedex" && (
        <ButtonGoToPage onClick={buttonFunction}>{textButton}</ButtonGoToPage>
      )}
    </HeaderContainer>
  );
}
export default Header;
