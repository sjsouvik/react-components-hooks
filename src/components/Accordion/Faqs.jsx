import { useState } from "react";
import Accordion from "./Accordion";

const data = [
  {
    id: 1,
    question: "Q. What is the national flower of India?",
    answer: "ans: Lotus",
  },
  {
    id: 2,
    question: "Q. What is the national animal of India?",
    answer: "ans: Tiger",
  },
  {
    id: 3,
    question: "Q. What is the national bird of India?",
    answer: "ans: Peacock",
  },
];

export const Faqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(1);

  return (
    <div className="faqs">
      <h2>FAQs</h2>
      {data.map((item) => (
        <Accordion
          key={item.id}
          {...item}
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
        />
      ))}
    </div>
  );
};
