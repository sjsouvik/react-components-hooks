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
  TrafficLightWrapper,
  ProgressBarWrapper,
  ProgressBarsWrapper,
  ProgressBarsWrapperII,
  ProgressBarsWrapperIII,
  ProgressBarsWrapperIV,
  AccordionImproved,
  Stopwatch,
  TabsImproved,
  TicTacToe,
  MemoryGame,
  TransferList,
  MasonryLayout,
  Carousel,
  CountryCapitalGame,
  OtpInput,
  StepperWrapper,
  ContactForm,
  FlightBooker,
  GenerateTable,
  LikeButton,
} from "./components";

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>

      <Carousel />

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

      <ProgressBarWrapper />

      <ProgressBarsWrapper />

      <ProgressBarsWrapperII />

      <ProgressBarsWrapperIII />

      <ProgressBarsWrapperIV />

      <AccordionImproved />

      <Stopwatch />

      <TabsImproved />

      <TicTacToe />

      <MemoryGame rows={5} cols={4} matchCount={2} waitTime={3000} />

      <CountryCapitalGame />

      <OtpInput passwordLength={6} />

      <StepperWrapper />

      <TransferList />

      <ContactForm />

      <FlightBooker />

      <GenerateTable />

      <LikeButton />

      <MasonryLayout />
    </div>
  );
}

export default App;
