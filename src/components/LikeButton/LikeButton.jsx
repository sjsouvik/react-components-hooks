import { useState } from "react";

import "./LikeButton.css";

/*

Create a Like button which appearance changes based on the following states:

The heart and spinner icons are provided for your convenience. The focus of this question is on the 
handling of the various states, not so much on being pixel perfect. As for colors, you can use `#f00` 
for the red and `#888` for the gray.

Requirements:

- In the button's default state, when it is clicked, it goes into the loading state and a request 
is made to the provided back end API which has a 50% chance to succeeding/failing.
    - If the request was successful, the button changes to the "Liked" state.
    - Otherwise it returns to the "Default"/"Hovered" state depending on whether the cursor is still 
    over the button. The error message from the back end API should be shown below the button.
- If the user clicks on a "Liked"-state button, the reverse flow happens.

Submission API:

- URL: https://www.greatfrontend.com/api/questions/like-button
- HTTP Method: `POST`
- Content Type: `json`

Parameters:

The following fields are accepted in the request body:

- `action`: A string of either 'like' or 'unlike' depending on the desired action.

Response:

The API has a 50% chance of succeeding (HTTP 200) or failing (HTTP 500) so as to make it easy for you to 
test the request failure cases. It returns a JSON payload of the following shape depending on the outcome.

Success: `{ message: 'Success!' }`
Failure: `{ message: 'Unknown error during attempted {{action}}. Please try again later.!' }`

*/

/*

Notes:

Writing code to make back end requests is pretty standard, in general you should use the following flow:

- Set the UI to show a loading state.
- Clear the error message.
- Make the back end request via fetch
- Determine if the request has succeeded.
    - If the response has succeeded, update the UI to indicate success.
    - If the response has failed, update the UI to indicate failure by showing an error message.
- Remove the loading state.


Some users might have the habit of double clicking on UI elements. By disabling the button after the first 
click, we avoid running into the situation where multiple requests are pending at the same time which is 
probably unintended and can lead to confusing outcomes.

*/

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
