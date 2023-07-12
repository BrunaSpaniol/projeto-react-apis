import styled from "styled-components";

export const DetailContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  padding-left: 2.75rem;

  width: 86.82144rem;
  height: 41.4375rem;
  flex-shrink: 0;

  border-radius: 2.36788rem;
  background: #729f92;
`;

export const PokemonBoxImgContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;

  padding-right: 2.13rem;
  > img {
    width: 17.625rem;
    height: 17.625rem;

    border-radius: 0.5rem;
    border: 2px solid #fff;

    background: #fff;
  }
`;

export const BaseStatsBox = styled.section`
  width: 21.4375rem;
  height: 38.3125rem;

  align-self: center;

  margin-right: 4.25rem;

  border-radius: 0.75rem;
  border: 2px solid #fff;
  background: #fff;

  background: #ffffff;

  > h1 {
    padding-top: 1.19rem;
    padding-left: 1.13rem;
    color: #000;
    font-family: "Inter";
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const MovesBox = styled.section`
  width: 18.25rem;
  height: 28.3125rem;

  border-radius: 0.75rem;
  border: 2px solid #fff;
  background: #fff;

  background: #ffffff;

  > h1 {
    padding-top: 1.19rem;
    padding-left: 1.13rem;
    color: #000;
    font-family: "Inter";
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const PokeinfoAndMoveContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const ImgPokemon = styled.img`
  position: absolute;
  top: 16%;
  right: 8%;

  width: 13.4027vw;
  height: 13.4027vw;
`;

export const MoveTag = styled.div`
  padding: 0.625rem;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.75rem;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  background: #ececec;

  > p {
    color: #000;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const MoveContainer = styled.section`
  margin-top: 1rem;
  margin-left: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr 1fr);
  column-gap: 1.25rem;
  justify-content: space-around;
`;
