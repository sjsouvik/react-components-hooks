import { useState } from "react";

import "./LikeButton.css";

const classNames = (...args) => {
  return args.filter(Boolean).join(" ");
};

export const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const likeUnlikeHandler = async () => {
    try {
      setPending(true);
      setErrorMessage(null);

      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: liked ? "unlike" : "like" }),
        }
      );

      if (response.ok === false) {
        const { message } = await response.json();
        setErrorMessage(message);
        return;
      }

      setLiked(!liked);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <h2>Like button</h2>
      <button
        disabled={pending}
        onClick={likeUnlikeHandler}
        className={classNames(
          "like-button",
          liked ? "like-button--liked" : "like-button--default"
        )}
      >
        {/* {pending ? <SpinnerIcon /> : <HeartIcon />} */}
        <span>{liked ? "Liked" : "Like"}</span>
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
};
