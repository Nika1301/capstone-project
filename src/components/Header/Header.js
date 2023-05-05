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
    padding-right: 25%;
    font-size: 12px;
    gap: 25%;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 25px;
  margin-top: 1rem;
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export default function Header({ title }) {
  return (
    <>
      <StyledHeader>
        <StyledImage src="/logo.png" alt="My Logo" width={50} height={50} />
        <h1>{title}</h1>
      </StyledHeader>
    </>
  );
}
