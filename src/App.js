import { BasicTable } from "./Components/BasicTable";
import { FilteringTable } from "./Components/FilteringTable";
import { SortingTable } from "./Components/SortingTable";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Table</h1>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <FilteringTable />
    </div>
  );
}
