import React from "react";
import { Checkboxes } from "./Checkboxes";
import { normalizeData } from "./utils";
import { checkboxesData, rootId } from "./data";
/*

Build a component that displays a hierarchical structure of checkboxes. The component should handle 
parent-child relationships between checkboxes and manage their states efficiently.

Requirements:

- A checkbox's value is determined by the value of its direct children:
    - When all children of a parent are checked, the parent should be checked.
    - When some (but not all or none) children of a parent are checked, the parent should be in an indeterminate state, with a dash displayed within the box.
    - When none of the children of a parent are checked, the parent is unchecked.
- If a parent checkbox is checked or unchecked, all the descendant checkboxes (not just direct children) will be updated with that new value.
- The focus of the exercise is on the functionality and not the styling. You may style the checkboxes in any way you prefer as long as the states are clear.

Data format:

```typescript
interface CheckboxItem {
  id: number;
  name: string;
  checked: boolean | 'indeterminate';
  children?: CheckboxItem[];
}
```

Example data:

```javascript
const fileData = [
  {
    id: 1,
    name: 'Electronics',
    children: [
      {
        id: 2,
        name: 'Mobile phones',
        children: [
          {
            id: 3,
            name: 'iPhone',
          },
          {
            id: 4,
            name: 'Android',
          },
        ],
      },
      {
        id: 5,
        name: 'Laptops',
        children: [
          {
            id: 6,
            name: 'MacBook',
          },
          {
            id: 7,
            name: 'Surface Pro',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Books',
    children: [
      {
        id: 9,
        name: 'Fiction',
      },
      {
        id: 10,
        name: 'Non-fiction',
      },
    ],
  },
  {
    id: 11,
    name: 'Toys',
  },
];
```

*/

/*
The normalized data would look as follows:

{
    "byId":
    {
        "1":{"id":1,"name":"Electronics","checked":false,"childs":[2,5],"parentId":""},
        "2":{"id":2,"name":"Mobile phones","checked":false,"childs":[3,4],"parentId":1},
        "3":{"id":3,"name":"iPhone","checked":false,"childs":[],"parentId":2},
        "4":{"id":4,"name":"Android","checked":false,"childs":[],"parentId":2},
        "5":{"id":5,"name":"Laptops","checked":false,"childs":[6,7],"parentId":1},
        "6":{"id":6,"name":"MacBook","checked":false,"childs":[],"parentId":5},
        "7":{"id":7,"name":"Surface Pro","checked":false,"childs":[],"parentId":5},
        "8":{"id":8,"name":"Books","checked":false,"childs":[9,10],"parentId":""},
        "9":{"id":9,"name":"Fiction","checked":false,"childs":[],"parentId":8},
        "10":{"id":10,"name":"Non-fiction","checked":false,"childs":[],"parentId":8},
        "11":{"id":11,"name":"Toys","checked":false,"childs":[],"parentId":""},
        "":{"childs":[1,8,11]}
    },
    "allIds":[1,2,3,4,5,6,7,8,9,10,11]
}


*/

const normalizedData = normalizeData(checkboxesData);
console.log(JSON.stringify(normalizedData, 2));

export const NestedCheckbox = () => {
  return (
    <>
      <h2>Nested Checkboxes</h2>
      <Checkboxes defaultCheckboxData={normalizedData} rootId={rootId} />
    </>
  );
};
