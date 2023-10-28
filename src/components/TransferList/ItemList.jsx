import { Checkbox } from "./Checkbox";

export const ItemList = (props) => {
  const { items, setItems } = props;

  const onChange = (item) => {
    setItems((prevItems) => ({ ...prevItems, [item]: !prevItems[item] }));
  };

  return (
    <ul className="item-list">
      {Object.keys(items).map((item) => (
        <li key={item}>
          <Checkbox
            label={item}
            checked={items[item]}
            onChange={() => onChange(item)}
          />
        </li>
      ))}
    </ul>
  );
};
