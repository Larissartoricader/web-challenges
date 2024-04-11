import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: true },
    { id: 2, name: "Kitchen", isOn: true },
    { id: 3, name: "Living Room", isOn: false },
    { id: 4, name: "Kitchen", isOn: true },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: true },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: true },
    { id: 9, name: "Child-Room", isOn: true },
    { id: 10, name: "Parents-Room", isOn: false },
  ]);

  function handleLight(id) {
    const chosenLight = lights.map((light) => {
      if (light.id === id) {
        return { ...light, isOn: !light.isOn };
      } else {
        return light;
      }
    });
    setLights(chosenLight);
  }

  function countingLightsOn(lights) {
    let lightsOn = 0;
    lights.forEach((light) => {
      if (light.isOn) {
        lightsOn++;
      }
    });
    return lightsOn;
  }
  const numberOfLightsOn = countingLightsOn(lights);
  console.log(numberOfLightsOn);

  function handleTurnAllLightsOn(lights) {
    const allLightsOn = lights.map((light) => {
      if (light.isOn === false) {
        return { ...light, isOn: true };
      } else {
        return light;
      }
    });

    setLights(allLightsOn);
  }

  function handleTurnAllLightsOff(lights) {
    const allLightsOff = lights.map((light) => {
      if (light.isOn === true) {
        return { ...light, isOn: false };
      } else {
        return light;
      }
    });

    setLights(allLightsOff);
  }

  return (
    <Layout isDimmed={numberOfLightsOn === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        onHandleLight={handleLight}
        lights={lights}
        numberOfLightsOn={numberOfLightsOn}
        onTurnAllLightsOn={handleTurnAllLightsOn}
        onTurnAllLightsOff={handleTurnAllLightsOff}
      />
    </Layout>
  );
}
