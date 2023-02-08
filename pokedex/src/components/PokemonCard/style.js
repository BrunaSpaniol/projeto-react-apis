import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2vw;
  width: 30.55vw;
  height: 14.5833vw;

  background: #729f92;
  border-radius: 12px;
`;

export const ImgBackground = styled.img`
  position: absolute;
  width: 14.634vw;
  height: 14.634vw;
  right: 0;
  top: 0;
`;

export const ImgPokemon = styled.img`
  z-index: 1;
  position: absolute;
  width: 13.4027vw;
  height: 13.4027vw;
  right: 0.5vw;
  top: -4vw;
`;

export const PokeType = styled.img`
  max-width: 100px;
  width: 99px;
  height: 31px;
  margin-right: 5px;
  overflow: hidden;
`;

export const TypesContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 20.5px;
  top: 89px;
`;

export const PokeId = styled.p`
  position: absolute;
  width: 30px;
  height: 19px;
  left: 23px;
  top: 25px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: white;
`;

export const PokeName = styled.h2`
  position: absolute;
  width: 159px;
  height: 39px;
  left: 23px;
  top: 40px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  color: white;
`;

export const DetailsLink = styled.a`
  width: 74px;
  height: 24px;
  position: absolute;
  left: 23px;
  bottom: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-decoration-line: underline;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
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

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #0f0f0f;
`;
