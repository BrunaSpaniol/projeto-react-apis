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
  cursor: pointer;
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
  cursor: pointer;
  left: 3%;
  border: none;
  background-color: white;

  font-family: "Poppins", sans-serif;
  color: #1a1a1a;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

export const ButtonRemovePokedex = styled.button`
  position: absolute;
  cursor: pointer;
  right: 3%;
  display: flex;
  width: 14.125rem;
  height: 3.5625rem;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.5rem;
  background: #ff6262;

  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: white;
`;

export const ReturnIcon = styled.img`
  position: fixed;
  left: 1%;
  width: 1.5625rem;
  height: 1.5625rem;
  flex-shrink: 0;
  color: black;
`;
