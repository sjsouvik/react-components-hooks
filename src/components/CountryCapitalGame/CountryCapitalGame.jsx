import { Game } from "./Game";
import { DATA } from "./data";
import "./CountryCapitalGame.css";

// problem statement:  https://devtools.tech/questions/s/build-country-capital-game-or-microsoft-frontend-interview-question-or-javascript-or-react-js---qid---yPb5g7MLCSf6j2F3qjqj

export const CountryCapitalGame = () => {
  return (
    <>
      <h1>Country capital game</h1>
      <main>
        <Game data={DATA} />
      </main>
    </>
  );
};
