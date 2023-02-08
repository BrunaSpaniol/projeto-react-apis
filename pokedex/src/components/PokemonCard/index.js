import {
  ImgBackground,
  PokemonCardContainer,
  ImgPokemon,
  PokeId,
  PokeName,
  PokeType,
  TypesContainer,
  DetailsLink, 
  ButtonCatch
} from "./style";
import ImgMask from "../../assets/cardImgBackground.svg";
import Pokemon from "./../../assets/pokemonTeste.svg";
import poketype from "./../../assets/type.svg";

function PokemonCard() {
  return (
    <>
      <PokemonCardContainer>
        <ImgBackground src={ImgMask} alt={"imagem pokemon bg"} />
        <ImgPokemon src={Pokemon} alt={"imagem do pokemon"} />
        <PokeId>#01</PokeId>
        <PokeName>Bulbasaur</PokeName>
        <TypesContainer>
          <PokeType src={poketype} alt={"tipo do pokemon"} />
          <PokeType src={poketype} alt={"tipo do pokemon"} />
        </TypesContainer>
        <DetailsLink href={''}>Detalhes</DetailsLink>
        <ButtonCatch>Capturar</ButtonCatch>
      </PokemonCardContainer>
    </>
  );
}
export default PokemonCard;
