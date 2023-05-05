import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  left: 0.5rem;
  border-radius: 5px;
  background-color: #0d5c63;
  color: yellow;
  font-size: 1rem;
`;
export const StyledSpan = styled.span`
  font-family: "Lobster", cursive;
  display: inline;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 1.2em;
  }
`;
export const StyledTotalPrice = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: #006d77;
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 1em;
  }
`;

export const StyledList = styled.li`
  list-style: none;
  font-family: "Lobster", cursive;
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 0.8em;
  }
`;
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 6rem 0.5rem 2rem 4rem;
  padding: 1rem;
`;
export const StyledCitySection = styled.section`
  display: flex;
  gap: 1rem;
`;
export const StyledDiv = styled.div`
  display: flex;
  gap: 3rem;
`;

export const StyledCountry = styled.h2`
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

export const StyledH4 = styled.h4`
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    font-weight: bold;
  }
`;
