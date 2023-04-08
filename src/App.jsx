import "./App.css";
import { StarRating, Timer } from "./components";

function App() {
  return (
    <div className="App">
      <StarRating />

      <Timer time={{ minutes: 2, seconds: 35 }} />
    </div>
  );
}

export default App;
