const cssClasses = {
  red: "bg-red",
  yellow: "bg-yellow",
  green: "bg-green",
};

export const Light = (props) => {
  const { light, currentLight } = props;

  return (
    <div
      aria-hidden={true}
      className={`light ${
        light === currentLight ? cssClasses[currentLight] : ""
      }`}
    />
  );
};
