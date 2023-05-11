import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 25px;
  background-color: #2ec4b6;
`;

export default function Footer({ footer }) {
  return (
    <>
      <StyledFooter>{footer}</StyledFooter>
    </>
  );
}
