import "./Accordion.css";

const Accordion = (props) => {
  const { question, answer, id, selectedFaq, setSelectedFaq } = props;

  return (
    <div className={`accordion mt-1 ${selectedFaq === id ? "active" : ""}`}>
      <section className="question" onClick={() => setSelectedFaq(id)}>
        {question}
      </section>
      <section className="answer">{answer}</section>
    </div>
  );
};

export default Accordion;
