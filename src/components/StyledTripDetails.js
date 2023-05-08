import styled from "styled-components";
import Link from "next/link";
export const StyledButton = styled.button`
  position: fixed;
  left: 0.5rem;
  border-radius: 5px;
  background-color: #0d5c63;
  color: yellow;
  font-size: 1rem;
`;
export const StyledSpan = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  display: inline;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 0.8em;
  }
`;
export const StyledTotalPrice = styled.span`
  font-family: "Lobster", cursive;
  color: #006d77;
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 1em;
  }
`;
export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const StyledList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem 0;
  list-style: none;
  font-family: "Lobster", cursive;
  &:span:first-child {
    text-align: left;
  }
  &:span:last-child {
    text-align: right;
  }
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
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 5rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
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
    font-size: 1em;
    font-weight: bold;
  }
`;
export const StyledLink = styled(Link)`
  position: fixed;
  color: yellow;
  background-color: #0d5c63;
  font-weight: bold;
  border: solid;
  border-color: yellow;
  border-radius: 20%;
  font-size: 0.5em;
  padding: 0.3rem;
  top: 5rem;
  margin: 1rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #0d5c63;
    background-color: yellow;
    border: solid;
    border-color: #0d5c63;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const StyledEditLink = styled(Link)`
  position: fixed;
  color: yellow;
  background-color: #0d5c63;
  font-weight: bold;
  border: solid;
  border-color: yellow;
  border-radius: 20%;
  font-size: 0.5em;
  padding: 0.3rem;
  top: 6rem;
  right: 1rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #0d5c63;
    background-color: yellow;
    border: solid;
    border-color: #0d5c63;
  }
  &:active {
    transform: scale(0.95);
  }
`;
