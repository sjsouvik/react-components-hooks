import "./App.css";
import {
  StarRating,
  Timer,
  AutoComplete,
  Faqs,
  TagInput,
  FileExplorer,
  Comment,
  ModalWrapper,
  TabExample,
  PhoneNumberInput,
} from "./components";
import { TrafficLightWrapper } from "./components/TrafficLight/TrafficLightWrapper";

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>

      <FileExplorer />

      <StarRating value={2} />

      <Timer time={{ minutes: 2, seconds: 35 }} />

      <Faqs />

      <AutoComplete />

      <TagInput />

      <Comment />

      <ModalWrapper />

      <TabExample />

      <PhoneNumberInput />

      <TrafficLightWrapper />
    </div>
  );
}

export default App;
