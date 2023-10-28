import { moveSrcToDest, moveAllToDest, hasSelection } from "./utils";

export const ActionButtons = (props) => {
  const { left, setLeft, right, setRight } = props;

  return (
    <section className="action-btns">
      <button
        aria-label="Transfer all items from left to right list"
        onClick={() => moveAllToDest(left, setLeft, right, setRight)}
      >
        <span aria-hidden={true}>{">>"}</span>
      </button>
      <button
        aria-label="Transfer the selected items from left to right list"
        disabled={!hasSelection(left)}
        onClick={() => moveSrcToDest(left, setLeft, right, setRight)}
      >
        <span aria-hidden={true}>{">"}</span>
      </button>
      <button
        aria-label="Transfer the selected items from right to left list"
        disabled={!hasSelection(right)}
        onClick={() => moveSrcToDest(right, setRight, left, setLeft)}
      >
        <span aria-hidden={true}>{"<"}</span>
      </button>
      <button
        aria-label="Transfer all items from right to left list"
        onClick={() => moveAllToDest(right, setRight, left, setLeft)}
      >
        <span aria-hidden={true}>{"<<"}</span>
      </button>
    </section>
  );
};
