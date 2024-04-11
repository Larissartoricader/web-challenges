// import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, onHandleLight }) {
  // const [isOn, setIsOn] = useState(false);

  // function handleToggle() {
  //   setIsOn((isOn) => !isOn);
  // }
  //State & HandleToggle to App

  return (
    <LightButton
      type="button"
      onClick={() => {
        onHandleLight();
      }}
      // $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
