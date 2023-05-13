import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 20px 10px 20px;
  background-color: #2ec4b6;
  color: #063539;
  text-align: right;
`;

export default function Footer() {
  return (
    <>
      <StyledFooter>@2023</StyledFooter>
    </>
  );
}
