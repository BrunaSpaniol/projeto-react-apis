import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  order: 0;
  background-color: white;
  width: 100vw;
  height: 11.11vw;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoPokemon = styled.img`
  width: 21.3194vw;
  height: 7.8472vw;
`;

export const ButtonGoToPage = styled.button`
  position: absolute;
  right: 3%;
  width: 19.9305vw;
  height: 5.1388vw;
  border: none;
  border-radius: 8px;
  padding: 0.5rem, 0.62rem;
  background: #33a4f5;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: white;
`;

export const ButtonReturnPage = styled.button`
  position: fixed;
  left: 3%;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: black;
`;
