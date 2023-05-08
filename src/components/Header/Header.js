import Image from "next/image";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #2ec4b6;
  position: fixed;
  top: 0;
  padding-right: 40%;
  @media screen and (max-width: 768px) {
    padding-right: 15%;
    gap: 15%;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 25px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  animation: spin 4s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const StyledTitle = styled.h1`
  text-align: center;
  color: #063539;
  font-size: 1.2em;
  margin: auto;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export default function Header({ title }) {
  return (
    <>
      <StyledHeader>
        <StyledImage src="/logo.png" alt="My Logo" width={50} height={50} />
        <StyledTitle>{title}</StyledTitle>
      </StyledHeader>
    </>
  );
}
