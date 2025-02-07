/* 

problem statement:  https://devtools.tech/questions/s/build-country-capital-game-or-microsoft-frontend-interview-question-or-javascript-or-react-js---qid---yPb5g7MLCSf6j2F3qjqj

In this frontend coding challenge, the candidate needs to implement a game to match countries with their capitals.

Many users reported that this question was asked in the frontend interview process of Microsoft.

Functional Requirements:
- Implement a component <Game /> that will receive an object data as a prop. Each key of the object would be a country and corresponding value would be its capital.

const DATA = {
    'India': 'Delhi',
    'Russia': 'Moscow',
    'China': 'Berlin',
     ...
}

- Render the list of countries and capitals in the random order on the UI.
- The aim of the game is to select the country and its capitals.
- The user can select 2 options. The default border color of an option should be #414141.
- Selected option should have blue color border.
- If the user selection is correct the selected options border color should change to #66cc99 and both options should disappear from the screen after 1000 ms.
- If the user selection is incorrect then the selected options border color should change to red and reset after 1000 ms.
- When there are no options left on the screen then show a message Congratulations.

*/

import { Game } from "./Game";
import { DATA } from "./data";
import "./CountryCapitalGame.css";

export const CountryCapitalGame = () => {
  return (
    <>
      <h2>Country capital game (asked in Zepto)</h2>
      <main>
        <Game data={DATA} />
      </main>
    </>
  );
};
