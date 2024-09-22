import { useState } from "react";
import { Checkbox } from "./Checkbox";

export const Checkboxes = ({ defaultCheckboxData, rootId }) => {
  const [data, setData] = useState(defaultCheckboxData);

  return (
    <ul className="container">
      {data.byId[rootId].childs.map((itemId) => {
        const item = data.byId[itemId];

        return (
          <Checkbox
            key={itemId}
            item={item}
            itemsById={data.byId}
            updateData={setData}
          />
        );
      })}
    </ul>
  );
};
