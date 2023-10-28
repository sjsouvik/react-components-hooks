import { useId } from "react";

export const Checkbox = (props) => {
  const { label, checked, onChange } = props;
  // React generate a unique ID for each item so that we can maximize reusability of the component.
  const id = useId();

  return (
    <div>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
