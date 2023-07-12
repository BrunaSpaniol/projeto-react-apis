import styled from "styled-components";

export const PokemonInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const PokeType = styled.img`
  max-width: 100px;
  width: 99px;
  height: 31px;
  overflow: hidden;
`;

export const TypesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  grid-column-gap: 1.13rem;
`;

export const PokeId = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
`;

export const PokeName = styled.h2`
  color: #fff;
  font-family: Inter;
  font-size: 3rem;
  font-weight: 700;

  color: #ffffff;
`;
