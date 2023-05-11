import Image from "next/image";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #2ec4b6;
  @media screen and (max-width: 768px) {
    gap: 15%;
  }
`;

const StyledImage = styled(Image)`
  position: fixed;
  top: 15px;
  left: 10px;
  border-radius: 25px;
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
  color: #063539;
  font-size: 1.5rem;
`;

export default function Header({ title }) {
  return (
    <>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
      </StyledHeader>
      <StyledImage src="/logo.png" alt="My Logo" width={50} height={50} />
    </>
  );
}
