import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onToggleOn,
  onToggleOff,
  numberOfLightsOn,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={numberOfLightsOn === 0}
        type="button"
        onClick={() => {
          onToggleOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={numberOfLightsOn === lights.length}
        type="button"
        onClick={() => {
          onToggleOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
