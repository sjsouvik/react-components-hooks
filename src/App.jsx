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
  BarChart,
  GridLight,
  CircleContainer,
  NestedCheckbox,
  ImageCarouselWrapperII,
  ImageCarouselWrapperIII,
  OtpInputII,
} from "./components";

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>

      <Carousel />

      <ImageCarouselWrapperII />

      <ImageCarouselWrapperIII />

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

      <OtpInputII
        onSubmit={(otp) => {
          fetch("https://www.greatfrontend.com/api/questions/auth-code-input", {
            method: "POST",
            body: JSON.stringify({ otp }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const message = await res.text();
            alert(message);
          });
        }}
      />

      <StepperWrapper />

      <TransferList />

      <ContactForm />

      <FlightBooker />

      <GenerateTable />

      <LikeButton />

      <BarChart />

      <GridLight />

      <CircleContainer />

      <NestedCheckbox />

      <MasonryLayout />
    </div>
  );
}

export default App;
