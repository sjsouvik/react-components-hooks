export const transformToObj = (items) => {
  return items.reduce((acc, item) => {
    acc[item] = false;
    return acc;
  }, {});
};

export const moveSrcToDest = (srcList, setSrcList, destList, setDestList) => {
  const updatedSrc = { ...srcList };
  const updatedDest = { ...destList };

  Object.keys(updatedSrc).forEach((key) => {
    if (!updatedSrc[key]) {
      return;
    }

    updatedDest[key] = updatedSrc[key];
    delete updatedSrc[key];
  });

  setSrcList(updatedSrc);
  setDestList(updatedDest);
};

export const hasSelection = (list) => {
  return Object.values(list).some((value) => value === true);
};

export const moveAllToDest = (srcList, setSrcList, destList, setDestList) => {
  setDestList({ ...destList, ...srcList });
  setSrcList({});
};
