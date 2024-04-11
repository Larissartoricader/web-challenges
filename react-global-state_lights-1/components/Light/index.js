import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ onToggle, name, isOn }) {
  return (
    <LightButton type="button" onClick={() => onToggle()}>
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
