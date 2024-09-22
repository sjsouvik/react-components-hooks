import { useEffect, useRef } from "react";
import { updateChildCheckBoxes, updateParentCheckboxes } from "./utils";

/*

By default, browsers render checkboxes in the indeterminate state using a dash/hyphen within the box. 
One quirk about indeterminate checkboxes is that there's no HTML attribute for it, and it can only be 
set using JavaScript:

```javascript
const $checkboxElement = document.querySelector(
  'input[type="checkbox"]',
);
$checkboxElement.indeterminate = true;
```

*/

export const Checkbox = (props) => {
  const { item, itemsById, updateData } = props;
  const { id, name, checked, childs, parentId } = item;

  const ref = useRef();

  const checkBoxChangeHandler = (e) => {
    const { checked } = e.target;

    const updatedItems = {
      ...itemsById,
      [id]: { ...itemsById[id], checked },
    };

    if (childs.length > 0) {
      updateChildCheckBoxes(childs, updatedItems, checked);
    }

    if (parentId !== "") {
      updateParentCheckboxes(updatedItems[parentId], updatedItems);
    }

    updateData((oldData) => ({ ...oldData, byId: updatedItems }));
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.indeterminate = checked === "indeterminate";
  }, [checked]);

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={checked === true || checked === false ? checked : false}
        ref={ref}
        onChange={checkBoxChangeHandler}
        style={{ fontSize: "16px" }}
      />
      <label htmlFor={id}>{name}</label>
      <ul className="container">
        {childs.length > 0 &&
          childs.map((itemId) => {
            const item = itemsById[itemId];

            return (
              <Checkbox
                key={itemId}
                item={item}
                itemsById={itemsById}
                updateData={updateData}
              />
            );
          })}
      </ul>
    </li>
  );
};
