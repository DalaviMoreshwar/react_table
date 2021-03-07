import { BasicTable } from "./Components/BasicTable";
import { ColumnHiding } from "./Components/ColumnHiding";
import { ColumnOrder } from "./Components/ColumnOrder";
import { FilteringTable } from "./Components/FilteringTable";
import { PaginationTable } from "./Components/PaginationTable";
import { RowSelection } from "./Components/RowSelection";
import { SortingTable } from "./Components/SortingTable";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Table asd</h1>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      <ColumnHiding />
    </div>
  );
}
