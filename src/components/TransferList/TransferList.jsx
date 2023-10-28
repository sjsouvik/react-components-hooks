import { useState } from "react";
import { ItemList } from "./ItemList";
import { ActionButtons } from "./ActionButtons";
import { transformToObj } from "./utils";

import "./TransferList.css";

const LEFT_ITEMS = ["HTML", "CSS", "JS"];
const RIGHT_ITEMS = ["React", "Angular", "Vue"];

/* using aria-labels to indicate their purpose since the <button>s do not have a visible label. As a result, 
hiding the button contents from screen readers via aria-hidden="true". */

export const TransferList = () => {
  const [left, setLeft] = useState(transformToObj(LEFT_ITEMS));
  const [right, setRight] = useState(transformToObj(RIGHT_ITEMS));

  return (
    <>
      <h2>Transfer list</h2>
      <div className="tr-container">
        <ItemList items={left} setItems={setLeft} />
        <ActionButtons
          left={left}
          setLeft={setLeft}
          right={right}
          setRight={setRight}
        />
        <ItemList items={right} setItems={setRight} />
      </div>
    </>
  );
};
