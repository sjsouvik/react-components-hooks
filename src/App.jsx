import "./App.css";
import { StarRating, Timer, AutoComplete, Faqs } from "./components";

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>

      <StarRating value={2} />

      <Timer time={{ minutes: 2, seconds: 35 }} />

      <Faqs />

      <AutoComplete />
    </div>
  );
}

export default App;
