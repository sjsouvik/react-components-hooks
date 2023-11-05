export const data = [
  { height: 160, id: 1 },
  { height: 70, id: 2 },
  { height: 130, id: 3 },
  { height: 160, id: 4 },
  { height: 70, id: 5 },
  { height: 130, id: 6 },
  { height: 70, id: 7 },
  { height: 80, id: 8 },
  { height: 100, id: 9 },
  { height: 130, id: 10 },
  { height: 140, id: 11 },
  { height: 160, id: 12 },
  { height: 100, id: 13 },
  { height: 60, id: 14 },
];

const numberOfColumns = 3,
  gap = 10,
  columnWidth = 70;

export const arrangeData = (data) => {
  // this array will maintain the columns' heights after adding every item
  const columnHeights = Array(numberOfColumns).fill(0);

  return data.map((item, index) => {
    /* We can find out the column to add the item using its index, 
      column = index % numberOfColumns, but in this way it might happen 
      that some columns are taller than others because those columns contain 
      the items with greater heights. To fix this issue, we can find out the column 
      with the shortest height before allocating the item to one column */

    const column = columnHeights.indexOf(Math.min(...columnHeights));

    const top = columnHeights[column];
    columnHeights[column] += item.height + gap;
    const left = column * (columnWidth + gap);

    return {
      ...item,
      top,
      left,
      width: columnWidth,
    };
  });
};
