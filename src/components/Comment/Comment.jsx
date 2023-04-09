import { useState } from "react";
import { IndividualComment } from "./IndividualComment";

const commentData = {
  id: "0",
  replies: [],
};

export const Comment = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(commentData);

  const addCommentHandler = () => {
    setComments({
      ...comments,
      replies: [
        ...comments.replies,
        { id: crypto.randomUUID(), title: comment, replies: [] },
      ],
    });
  };

  const updateComments = (commentId, newComment) => {
    function addReply(treeData) {
      if (treeData.id === commentId) {
        return { ...treeData, replies: [...treeData.replies, newComment] };
      }

      let latestData = [];
      latestData = treeData.replies.map((comment) => addReply(comment));

      return { ...treeData, replies: latestData };
    }

    const updatedData = addReply(comments);
    setComments(updatedData);
  };

  return (
    <div>
      <h2>Comment</h2>
      <input
        type="text"
        placeholder="Comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addCommentHandler}>ADD</button>
      <ul>
        {comments.replies.map((comment) => (
          <IndividualComment
            key={comment.id}
            comment={comment}
            updateComments={updateComments}
          />
        ))}
      </ul>
    </div>
  );
};
