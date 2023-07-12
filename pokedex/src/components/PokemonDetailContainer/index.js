import { PokemonInfoContainer } from "../PokemonInfoContainer";
import { StatsGrafic } from "../StatsGrafic";
import { Divider } from "@chakra-ui/react";

import {
  DetailContainer,
  PokemonBoxImgContainer,
  BaseStatsBox,
  MovesBox,
  PokeinfoAndMoveContainer,
  ImgPokemon,
  MoveTag,
  MoveContainer,
} from "./styles";

export function PokemonDetailContainer({ pokemon }) {
  function renderMoveTag() {
   return pokemon?.abilities?.map(({ability}) => {
      return (
        <MoveTag>
          <p>{ability?.name}</p>
        </MoveTag>
      );
    });
  }

  return (
    <DetailContainer>
      <PokemonBoxImgContainer>
        <img src={pokemon?.sprites?.front_default} alt={""} />
        <img src={pokemon?.sprites?.back_default} alt={""} />
      </PokemonBoxImgContainer>

      <BaseStatsBox>
        <h1>Base stats</h1>
        <Divider colorScheme="gray" />
        <StatsGrafic pokemonStats={pokemon?.stats} />
      </BaseStatsBox>

      <PokeinfoAndMoveContainer>
        <PokemonInfoContainer pokemon={pokemon} />

        <MovesBox>
          <h1>Moves</h1>
          <MoveContainer>
            {renderMoveTag()}
          </MoveContainer>
        </MovesBox>

        <ImgPokemon
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          alt={"imagem do pokemon"}
        />
      </PokeinfoAndMoveContainer>
    </DetailContainer>
  );
}
