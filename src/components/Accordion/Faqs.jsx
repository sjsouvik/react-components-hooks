import Accordion, { AccordionItem } from "./Accordion";

const accordionData = [
  {
    id: "1",
    question: "Q. What is the national flower of India?",
    answer: "ans: Lotus",
  },
  {
    id: "2",
    question: "Q. What is the national animal of India?",
    answer: "ans: Tiger",
  },
  {
    id: "3",
    question: "Q. What is the national bird of India?",
    answer: "ans: Peacock",
  },
];

export const Faqs = () => {
  return (
    <div className="faqs">
      <h2>FAQs</h2>
      <Accordion defaultActiveId="1">
        {accordionData.map(({ id, question, answer }) => (
          <AccordionItem key={id} id={id} label={question}>
            {answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
