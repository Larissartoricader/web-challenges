import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

const DivBox = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <DivBox>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $backgroundColor="blackbutton" />
    </DivBox>
  );
}
