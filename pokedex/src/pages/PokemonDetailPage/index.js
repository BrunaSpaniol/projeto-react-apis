import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalContext";

import Header from "../../components/Header";
import detailImgBg from "../../assets/detailimgbg.svg";

import { PokemonDetailContainer } from "../../components/PokemonDetailContainer";

import {
  DetailPage,
  MainPage,
  PageTitle,
  PokemonsDetailContainerBg,
  PokebolBg,
} from "./styles";

function PokemonsDetailPage() {
  const { pokemonsList, pokedex } = useContext(GlobalContext);

  const { pokemonName } = useParams();

  const [pokemonSelected, setPokemonSelected] = useState(gePokemonSelected());

  function gePokemonSelected() {
    const isInList = pokemonsList?.filter(
      (pokemonInList) => pokemonInList?.name === pokemonName
    );
    if (!!isInList) {
      return isInList[0];
    }
    const isInPokedex = pokedex?.filter(
      (pokemonInPokedex) => pokemonInPokedex?.name === pokemonName
    );
    if (!!isInPokedex) {
      setPokemonSelected([isInPokedex]);
      return isInPokedex[0];
    }
  }

  console.log(pokemonSelected);

  useEffect(() => {
    gePokemonSelected();
  }, []);

  return (
    <DetailPage>
      <Header page="pokemonsDetails" />

      <MainPage>
        <PageTitle>Detalhes</PageTitle>

        <PokemonsDetailContainerBg>
          <PokebolBg src={detailImgBg} />

          <PokemonDetailContainer pokemon={pokemonSelected} />
        </PokemonsDetailContainerBg>
      </MainPage>
    </DetailPage>
  );
}
export default PokemonsDetailPage;
