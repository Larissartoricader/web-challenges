import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  onTurnAllLightsOn,
  lights,
  onTurnAllLightsOff,
  numberOfLightsOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onToggleOn={() => onTurnAllLightsOn(lights)}
        onToggleOff={() => onTurnAllLightsOff(lights)}
        numberOfLightsOn={numberOfLightsOn}
        lights={lights}
      />
    </>
  );
}
