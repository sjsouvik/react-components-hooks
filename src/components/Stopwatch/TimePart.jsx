export const TimePart = (props) => {
  const { time, unit } = props;

  return (
    <span>
      <span className="time-number">{time}</span>
      <span className="time-unit">{unit}</span>
    </span>
  );
};
