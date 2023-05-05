import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #0d5c63;
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: yellow;
  font-weight: bold;
  border: none;
`;
export const StyledBackHomeButton = styled.button`
  background-color: #0d5c63;
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: yellow;
  font-weight: bold;
  border: none;
  margin-left: 1rem;
  margin-top: 6rem;
`;
export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem 2rem 1rem;
  margin: auto;
  max-width: 800px;

  @media (max-width: 768px) {
    width: 180%;
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: inherit;
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
`;
export const StyledDivSection = styled.div`
  flex-direction: column;
`;

export const StyledTotalPrice = styled.div`
  padding: 1.8rem;
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
