import { useState } from "react";
import "./TagInput.css";

export const TagInput = () => {
  const [tags, setTags] = useState([]);

  const keydownHandler = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const removeTagHandler = (tagName) => {
    const updatedTags = tags.filter((tag) => tag !== tagName);
    setTags(updatedTags);
  };

  return (
    <div className="mt-1">
      <h2>Tag Input</h2>
      <div className="tag-input">
        <ul className="tags">
          {tags.map((tag, index) => (
            <li className="tag" key={`${tag}-${index}`}>
              {tag}
              <span
                className="tag-cancel"
                onClick={() => removeTagHandler(tag)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter your name & press enter"
          onKeyDown={keydownHandler}
        />
      </div>
    </div>
  );
};
