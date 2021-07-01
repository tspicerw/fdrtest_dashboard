import "./App.css";
import Listcontainer from "./components/Listcontainer.js";
import Chart from "./components/Chart.js";

const items1 = [
  "Item Name",
  "Item Name",
  "Item Name",
  "Item Name",
  "Item Name",
  "Item Name",
  "Item Name",
  "Item Name",
  "Item Name",
  "Item Name",
  "Item Name",
];
const items2 = ["Item Name", "Item Name", "Item Name", "Item Name"];

function App() {
  return (
    <div className="App">
      <Chart />
      <div className="chartWrapper">
        <Listcontainer items={items1} name="Header Text" />
        <Listcontainer items={items2} name="This is a Long Header Text" />
      </div>
    </div>
  );
}

export default App;
