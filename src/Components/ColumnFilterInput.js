export const ColumnFilterInput = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      {" "}
      Global Search:{" "}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />{" "}
    </span>
  );
};
