import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.$backgroundColor === "blackbutton" ? "black" : "green"};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

export default function BoxWithStyledComponents({ $backgroundColor }) {
  return <StyledDiv $backgroundColor={$backgroundColor}></StyledDiv>;
}
