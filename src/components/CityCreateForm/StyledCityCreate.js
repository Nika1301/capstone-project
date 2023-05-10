import styled from "styled-components";
import Link from "next/link";

export const StyledButton = styled.button`
  background-color: #0d5c63;
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: #cbf3f0;
  font-weight: bold;
  &:hover {
    color: #063539;
    background-color: #2ec4b6;
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
  margin-bottom: 3rem;
`;

export const StyledInput = styled.input`
  padding: 0.3rem;
  font-size: 1rem;
  border: 3px solid black;
  border-radius: 0.5rem;
`;
export const StyledInputSmall = styled.input`
  padding: 0.3rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  width: 100px;
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
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const StyledSelect = styled.select`
  padding: 0.3rem;
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  font-size: 1.3rem;
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
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;
export const StyledLink = styled(Link)`
  position: fixed;
  color: #cbf3f0;
  background-color: #0d5c63;
  font-weight: bold;
  border-radius: 10px;
  font-size: 1em;
  padding: 0.5rem;
  top: 6rem;
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
