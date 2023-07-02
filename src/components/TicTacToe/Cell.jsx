export const Cell = (props) => {
  const { mark, turn, disabled, clickHandler } = props;

  return (
    <button
      aria-label={mark === null ? `mark cell as ${turn}` : undefined}
      disabled={disabled}
      onClick={clickHandler}
      className="cell"
    >
      <span aria-hidden={true}>{mark}</span>
    </button>
  );
};
