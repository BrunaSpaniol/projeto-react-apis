import {
  PokemonInfo,
  PokeType,
  TypesContainer,
  PokeId,
  PokeName,
} from "./styles";

import { getTypes } from "../../utils/getPokemonType";

export function PokemonInfoContainer({ pokemon }) {

  return (
    <PokemonInfo>
      <PokeId>{`#${pokemon?.order}`}</PokeId>

      <PokeName>{pokemon?.name}</PokeName>

      <TypesContainer>
        <PokeType
          src={getTypes(pokemon?.types[0]?.type?.name)}
          alt={"tipo do pokemon"}
        />

        <PokeType
          src={getTypes(pokemon?.types[1]?.type?.name)}
          alt={"tipo do pokemon"}
        />
      </TypesContainer>
    </PokemonInfo>
  );
}
