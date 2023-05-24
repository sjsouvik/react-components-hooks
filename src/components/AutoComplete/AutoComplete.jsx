import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import "./AutoComplete.css";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";

const data = [
  "axis",
  "hdfc",
  "hlfc",
  "hmccc",
  "hkbc",
  "hefc",
  "hifc",
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

const getHighlightedText = (text, highlight) => {
  const splittedText = text.split(new RegExp(`(${highlight})`, "gi"));

  return splittedText.map((part, index) => (
    <span
      key={index}
      className={
        part.toLowerCase() === highlight.toLowerCase() ? "font-bold" : ""
      }
    >
      {part}
    </span>
  ));
};

export const AutoComplete = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const activeSuggestionRef = useRef(null);
  const domNode = useClickOutside(closeSearchSuggestion);

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

  const scrollToActiveSuggestion = () => {
    if (activeSuggestionRef.current) {
      activeSuggestionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const keyDownHandler = (e) => {
    const { keyCode } = e;

    // Refer to this to learn more about `flushSync` and its usage - https://react.dev/learn/manipulating-the-dom-with-refs#flushing-state-updates-synchronously-with-flush-sync
    flushSync(() => {
      if (keyCode === 40 && activeSuggestionIndex < searchResults.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      } else if (keyCode === 38 && activeSuggestionIndex >= 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    });

    scrollToActiveSuggestion();
  };

  function closeSearchSuggestion() {
    setSearchResults([]);
  }

  const selectSearchResult = (searchResult) => {
    setSearchText(searchResult);
    closeSearchSuggestion();
  };

  return (
    <>
      <h2>AutoComplete</h2>
      <section className="autocomplete">
        <input
          type="search"
          placeholder="Search..."
          onChange={searchChangeHandler}
          onKeyDown={keyDownHandler}
          value={searchText}
          className="searchbox"
        />

        {searchResults.length > 0 && (
          <ul className="search-results" ref={domNode}>
            {searchResults.map((searchResult, index) => (
              <li
                key={searchResult}
                className={`search-result ${
                  activeSuggestionIndex === index ? "active" : ""
                }`}
                ref={
                  activeSuggestionIndex === index ? activeSuggestionRef : null
                }
                onClick={() => selectSearchResult(searchResult)}
              >
                {getHighlightedText(searchResult, searchText)}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
