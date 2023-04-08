import { useState } from "react";
import "./AutoComplete.css";
import useDebounce from "../../hooks/useDebounce";

const data = [
  "axis",
  "hdfc",
  "sbi",
  "canara",
  "cbi",
  "dbs",
  "freecharge",
  "hsbc",
  "icici",
  "kotak",
  "paytm",
  "ybl",
];

export const AutoComplete = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const search = (text) => {
    const filteredList = data.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );

    setSearchResults(filteredList);

    if (!text) {
      setSearchResults([]);
    }
  };

  const improvedFn = useDebounce(search, 300);

  const searchChangeHandler = (e) => {
    const text = e.target.value;
    setSearchText(text);
    improvedFn(text);
  };

  const selectSearchResult = (searchResult) => {
    setSearchText(searchResult);
    setSearchResults([]);
  };

  return (
    <div>
      <h2>AutoComplete</h2>
      <div className="autocomplete">
        <input
          type="search"
          placeholder="Search..."
          onChange={searchChangeHandler}
          value={searchText}
          className="searchbox"
        />

        {searchResults.length > 0 && (
          <ul className="search-results">
            {searchResults.map((searchResult) => (
              <li
                key={searchResult}
                className="search-result"
                onClick={() => selectSearchResult(searchResult)}
              >
                {searchResult}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
