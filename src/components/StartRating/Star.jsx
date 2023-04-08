const Star = ({ starId, marked }) => {
  return (
    <span data-starid={starId} className="star">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

export default Star;
