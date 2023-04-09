import { useState } from "react";

export const IndividualComment = (props) => {
  const { comment, updateComments } = props;

  const [showInput, setShowInput] = useState(false);
  const [reply, setReply] = useState("");

  const replyButtonClickHandler = () => {
    setShowInput(true);
  };

  const addReplyHandler = () => {
    const newReply = {
      id: crypto.randomUUID(),
      title: reply,
      replies: [],
    };

    updateComments(comment.id, newReply);
    setReply("");
    setShowInput(false);
  };

  return (
    <li style={{ margin: "1rem 0" }}>
      {comment.title}
      <button onClick={replyButtonClickHandler}>Reply</button>

      <ul>
        {comment.replies.map((reply) => (
          <IndividualComment
            key={reply.id}
            comment={reply}
            updateComments={updateComments}
          />
        ))}

        {showInput && (
          <>
            <input
              type="text"
              placeholder="Reply..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              style={{ marginTop: "1rem" }}
            />
            <button onClick={addReplyHandler}>ADD</button>
          </>
        )}
      </ul>
    </li>
  );
};
