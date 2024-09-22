import { checkboxesData, rootId } from "./data";

const flatData = { byId: {}, allIds: [] };

checkboxesData.forEach((item) => {
  if (flatData.byId[rootId] === undefined) {
    flatData.byId[rootId] = { childs: [item.id] };
  } else {
    flatData.byId[rootId].childs.push(item.id);
  }
});

export const normalizeData = (data, parentId = "") => {
  return data.reduce((acc, item) => {
    const { children, ...restProps } = item;
    acc.byId[item.id] = { ...restProps, childs: [], parentId };
    acc.allIds.push(item.id);

    if (children && children.length) {
      children.forEach((child) => acc.byId[item.id].childs.push(child.id));
      normalizeData(children, item.id);
    }

    return acc;
  }, flatData);
};

export function updateChildCheckBoxes(childs, updatedItems, value) {
  childs.forEach((childId) => {
    updatedItems[childId] = { ...updatedItems[childId], checked: value };

    if (updatedItems[childId].childs.length > 0) {
      updateChildCheckBoxes(updatedItems[childId].childs, updatedItems, value);
    }
  });
}

export function updateParentCheckboxes(parent, updatedItems) {
  const { id, childs, parentId } = parent;
  const checkedChildren = childs.reduce(
    (total, itemId) => total + Number(updatedItems[itemId].checked === true),
    0
  );

  const uncheckedChildren = childs.reduce(
    (total, itemId) => total + Number(updatedItems[itemId].checked === false),
    0
  );

  if (checkedChildren === childs.length) {
    updatedItems[id] = { ...parent, checked: true };
  } else if (uncheckedChildren === childs.length) {
    updatedItems[id] = { ...parent, checked: false };
  } else {
    updatedItems[id] = { ...parent, checked: "indeterminate" };
  }

  if (parentId !== "") {
    updateParentCheckboxes(updatedItems[parentId], updatedItems);
  }
}
