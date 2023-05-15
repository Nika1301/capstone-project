import styled from "styled-components";
import Link from "next/link";

export const StyledSpan = styled.span`
  font-family: "Lobster", cursive, bold;
  display: block;
  margin-top: 5px;
`;
export const StyledTotalPrice = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  color: #0d5c63;
  font-size: 1.2em;
`;
export const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`;
export const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 2rem 1.5rem;
  margin: auto;
  margin: 6rem 1rem 3rem 1rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  font-size: 0.8rem;
`;

export const StyledCountry = styled.h2`
  text-align: center;
  font-size: 1.5em;
`;

export const StyledH4 = styled.h4`
  font-size: 1.2em;
  font-weight: bold;
`;
export const StyledLink = styled(Link)`
  position: fixed;
  color: #cbf3f0;
  background-color: #0d5c63;
  font-weight: bold;
  border-radius: 10px;
  font-size: 0.8em;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  top: 5.5rem;
  left: 1rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #063539;
    background-color: #2ec4b6;
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const StyledEditLink = styled(Link)`
  position: fixed;
  color: #cbf3f0;
  background-color: #0d5c63;
  font-weight: bold;
  border-radius: 10px;
  font-size: 0.8em;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  top: 5.5rem;
  right: 1rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #063539;
    background-color: #2ec4b6;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const StyledButtonDelete = styled.button`
  position: fixed;
  color: #cbf3f0;
  background-color: #0d5c63;
  font-weight: bold;
  border-radius: 10px;
  font-size: 0.8em;
  padding: 0.47rem;
  top: 5.5rem;
  right: 5rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #063539;
    background-color: #2ec4b6;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const StyledPopup = styled.div`
  height: 300px;
  width: 600px;
  background-color: #2ec4b6;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  padding: 2rem;

  p {
    font-size: 1.5em;
    margin-top: 2rem;
    padding: 1rem;
  }

  button {
    font-size: 1.2em;
    margin: 0 2rem;
    color: green;
    padding: 1rem;
  }

  button:last-child {
    color: red;
  }

  @media (max-width: 414px) {
    height: 300px;
    width: 350px;
  }
`;
export const StyledBlox = styled.section`
  border: solid;
  border-color: white;
  padding: 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
`;
