export const GlobalFilterInput = ({ filter, setFilter }) => {
  return (
    <span>
      {" "}
      Global Search:{" "}
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />{" "}
    </span>
  );
};
