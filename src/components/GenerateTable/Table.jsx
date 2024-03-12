export const Table = (props) => {
  const { rows, columns } = props;

  return (
    <table>
      <tbody>
        {Array(Number(rows))
          .fill(null)
          .map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array(Number(columns))
                .fill(null)
                .map((_, colIndex) => (
                  <td key={colIndex}>
                    {colIndex % 2 === 0
                      ? rows * colIndex + (rowIndex + 1)
                      : rows * (colIndex + 1) - rowIndex}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
