// shuffle can also be done using the shuffle function from lodash
export const shuffle = (data) => {
  const list = Object.entries(data).flat();

  for (let i = 0; i < list.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  return list;
};
