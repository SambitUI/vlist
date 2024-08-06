import "./App.css";
import VirtualizedList from "./VirtualizedList";

function App() {
  const LIST = Array.from({ length: 100000 }, (_, index) => index + 1);

  return (
    <div className="App">
      <VirtualizedList list={LIST} height={400} width={300} itemHeight={35} />{" "}
    </div>
  );
}

export default App;
