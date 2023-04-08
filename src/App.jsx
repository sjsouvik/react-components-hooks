import "./App.css";
import { StarRating, Timer, AutoComplete } from "./components";

function App() {
  return (
    <div className="App">
      <StarRating value={2} />

      <Timer time={{ minutes: 2, seconds: 35 }} />

      <AutoComplete />
    </div>
  );
}

export default App;
