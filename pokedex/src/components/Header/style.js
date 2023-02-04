import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: white;
  width: 100vw;
  height: 8vw;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoPokemon = styled.img`
width: 15.35vw;
height: 5.65vw;
`

export const ButtonGoToPage = styled.button`
  position: fixed;
  right: 3%;
  width: 14.35vw;
  height: 3.7vw;
  border: none;
  border-radius: 8px;
  padding: 0.5rem, 0.62rem;
  background: #33a4f5;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: white;
`;

export const ButtonReturnPage = styled.button`
  position: fixed;
  left: 3%;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: black;
`;
