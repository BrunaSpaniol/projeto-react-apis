import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2vw;
  width: 27.5rem;
  height: 13.125rem;

  background: ${(props) => props.color};
  border-radius: 12px;
`;

export const DivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr 0.5fr);
  align-items: flex-start;
`;

export const ImgBackground = styled.img`
  position: absolute;
  width: 14.634vw;
  height: 14.634vw;
  right: 0;
  top: 0;
`;

export const ImgPokemon = styled.img`
  position: absolute;
  width: 12.0625rem;
  height: 12.0625rem;
  justify-self: flex-end;
  top: -4vw;
`;

export const PokemonInfo = styled.section`
  display: flex;
  flex-direction: column;

  margin-left: 1.44rem;
  margin-top: 1.56rem;
`;

export const PokeType = styled.img`
  overflow: hidden;
`;

export const TypesContainer = styled.div`
  display: grid;
  width: max-content;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

export const PokeId = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;

  color: white;
`;

export const PokeName = styled.h2`
  margin-bottom: 0.85rem;

  font-family: "Inter";
  font-weight: 700;
  line-height: 39px;
  font-size: 2.5rem;

  color: white;
`;

export const DetailsLink = styled.a`
  cursor: pointer;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;

  text-decoration-line: underline;

  color: #ffffff;
`;

export const ButtonCatch = styled.button`
  position: absolute;
  right: 23px;
  bottom: 20px;
  width: 146px;
  height: 38px;

  background: #ffffff;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  z-index: 2;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #0f0f0f;
`;

export const ButtonRemove = styled.button`
  position: absolute;
  right: 23px;
  bottom: 20px;
  width: 9.125rem;
  height: 2.375rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  z-index: 2;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: white;

  border-radius: 0.5rem;
  background: #ff6262;
`;
