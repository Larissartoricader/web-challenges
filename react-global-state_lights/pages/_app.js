import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: true },
    { id: 1, name: "Kitchen", isOn: true },
    { id: 2, name: "Living Room", isOn: false },
    { id: 3, name: "Kitchen", isOn: true },
    { id: 4, name: "Garage", isOn: false },
    { id: 5, name: "Porch", isOn: true },
    { id: 6, name: "Garden", isOn: false },
    { id: 7, name: "Garden", isOn: true },
  ]);

  function handleLight(id) {
    const chosenLight = lights.map((light) => {
      return light;
    });

    setLights(chosenLight);

    if (chosenLight.id !== id) {
      return { ...chosenLight, isOn: !chosenLight.isOn };
    } else {
      return chosenLight;
    }
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} onHandleLight={handleLight} />
    </Layout>
  );
}
