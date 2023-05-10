import styled from "styled-components";
import Link from "next/link";

export const StyledButton = styled.button`
  background-color: #0d5c63;
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: yellow;
  font-weight: bold;
  border: solid;

  &:hover {
    color: white;
    background-color: #2ec4b6;
    border-color: white;
    border: solid;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 1rem 2rem 1rem;
  margin: auto;
  max-width: 800px;
  margin-top: 6rem;
  @media (max-width: 768px) {
    width: 180%;
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1.5em;
  border: 3px solid black;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;
export const StyledInputSmall = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  width: 100px;
  margin-right: 1rem;
`;
export const StyledTextarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.5em;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const StyledSelect = styled.select`
  height: 50px;
  padding: 10px;
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.5em;
  margin-right: 1rem;
  option {
    height: 50px;
  }
`;
export const StyledDivSection = styled.div`
  flex-direction: column;
`;

export const StyledTotalPrice = styled.div`
  padding: 1.6rem;
  font-size: 0.9em;
  font-weight: bold;
  color: #0d5c63;
`;

export const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem;
`;
export const StyledLink = styled(Link)`
  position: fixed;
  color: yellow;
  background-color: #0d5c63;
  font-weight: bold;
  border: solid;
  border-color: yellow;
  border-radius: 20%;
  font-size: 1em;
  padding: 0.5rem;
  top: 6rem;
  left: 1rem;
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
