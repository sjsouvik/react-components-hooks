export const Select = (props) => {
  const { options, sortData } = props;

  return (
    <>
      <label htmlFor="sortData">Sort data </label>
      <select id="sortData" onChange={(e) => sortData(e.target.value)}>
        {options.map(({ id, label, value }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
