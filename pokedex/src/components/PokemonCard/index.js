import { useNavigate, useLocation } from "react-router-dom";

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
  DivContainer,
  PokemonInfo,
} from "./style";
import ImgMask from "../../assets/cardImgBackground.svg";
import { getTypes } from "../../utils/getPokemonType";
import { getColors } from "../../utils/getColors";

function PokemonCard({
  pokemon,
  removeFromPokedex,
  addToPokedex,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  function renderButton() {
    if (location.pathname === "/") {
      return (
        <ButtonCatch onClick={() => addToPokedex(pokemon)}>Capturar</ButtonCatch>
      );
    }

    return (
      <ButtonRemove onClick={() => removeFromPokedex(pokemon)}>
        Excluir
      </ButtonRemove>
    );
  }

  return (
    <PokemonCardContainer color={getColors(pokemon?.types[0]?.type?.name)}>
      <ImgBackground src={ImgMask} alt={"imagem pokemon bg"} />

      <DivContainer>
        <PokemonInfo>
          <PokeId>{`#${pokemon.order}`}</PokeId>

          <PokeName>{pokemon.name}</PokeName>

          <TypesContainer>
            {pokemon?.types?.map(({ type }) => {
              return (
                <PokeType
                  key={type?.name}
                  src={getTypes(type?.name)}
                  alt={"tipo do pokemon"}
                />
              );
            })}
          </TypesContainer>

          <DetailsLink onClick={() => handleDetail(navigate, pokemon?.name)}>
            Detalhes
          </DetailsLink>
        </PokemonInfo>

        <>
          <ImgPokemon
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={"imagem do pokemon"}
          />
          {renderButton()}
        </>
      </DivContainer>
    </PokemonCardContainer>
  );
}
export default PokemonCard;
