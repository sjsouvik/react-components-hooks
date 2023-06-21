import TrafficLight from "./TrafficLight";

const lights = {
  red: {
    duration: 4000,
    next: "green",
  },
  yellow: {
    duration: 500,
    next: "red",
  },
  green: {
    duration: 3000,
    next: "yellow",
  },
};

export const TrafficLightWrapper = () => {
  return (
    <>
      <h2>Traffic light</h2>
      <div className="wrapper">
        <TrafficLight lights={lights} />
        <TrafficLight lights={lights} layout="horizontal" />
      </div>
    </>
  );
};
