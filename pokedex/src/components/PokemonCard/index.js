import { useNavigate } from "react-router-dom";

import { handleDetail } from "../../routes/cordinator";
import {
  ImgBackground,
  PokemonCardContainer,
  ImgPokemon,
  PokeId,
  PokeName,
  PokeType,
  TypesContainer,
  DetailsLink,
  ButtonCatch,
  ButtonRemove,
} from "./style";
import ImgMask from "../../assets/cardImgBackground.svg";
import poketype from "./../../assets/type.svg";

function PokemonCard({ pokemon, page }) {
  const navigate = useNavigate();

  function renderButton() {
    if (page === "pokemonsList") {
      return <ButtonCatch>Capturar</ButtonCatch>;
    }
    if (page === "pokedex") {
      return <ButtonRemove>Excluir</ButtonRemove>;
    }
  }

  return (
    <PokemonCardContainer>
      <ImgBackground src={ImgMask} alt={"imagem pokemon bg"} />
      <ImgPokemon
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={"imagem do pokemon"}
      />
      <PokeId>{`#${pokemon.order}`}</PokeId>
      <PokeName>{pokemon.name}</PokeName>
      <TypesContainer>
        <PokeType src={poketype} alt={"tipo do pokemon"} />
        <PokeType src={poketype} alt={"tipo do pokemon"} />
      </TypesContainer>
      <DetailsLink onClick={() => handleDetail(navigate)}>Detalhes</DetailsLink>
      {renderButton()}
    </PokemonCardContainer>
  );
}
export default PokemonCard;
