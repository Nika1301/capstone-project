import styled from "styled-components";

export const StyleButton = styled.button`
  display: flex;
  position: fixed;
  margin-top: 6rem;
  margin-left: 0.5rem;
  border-radius: 5px;
  background-color: #0d5c63;
  color: yellow;
  bottom: 1rem;
  font-size: 1rem;
`;
export const StyleSpan = styled.span`
  font-family: "Lobster", cursive;
  display: inline;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 18px;
  }
`;
export const StyleTotalPrice = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: #006d77;
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 16px;
  }
`;

export const StyleList = styled.li`
  list-style: none;
  font-family: "Lobster", cursive;
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 21px;
  }
`;
export const StyleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 6rem 0.5rem 2rem 4rem;
  padding: 1rem;
`;
export const StyleCitySection = styled.section`
  display: flex;
  gap: 1rem;
`;
export const StyleDiv = styled.div`
  display: flex;
  gap: 3rem;
`;

export const StyleCountry = styled.h2`
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    font-weight: bold;
  }
`;

export const StyleH4 = styled.h4`
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: bold;
  }
`;
