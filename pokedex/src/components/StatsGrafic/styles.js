import styled from "styled-components";

export const DivProgressBar = styled.div`
  width: 19.1875rem;
  padding-left: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 0.1fr 0.1fr 0.8fr);
  column-gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  > p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: right;

    color: #0f0f0f;
  }
`;
