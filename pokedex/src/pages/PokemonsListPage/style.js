import styled from "styled-components";

export const ContainerListPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainPage = styled.main`
  padding-top: 2rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100vw;
  min-height: 81.527vw;
  max-height: 200vw;
  background-color: #5e5e5e;
`;

export const PageTitle = styled.h1`
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  padding-bottom: 1.5rem;
`;
export const PokemonsCardContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.25rem;
  grid-row-gap: 3.31rem;
`;
