/*

In Progress Bars III, we built progress bars which fill up in parallel, where multiple of them are filling up concurrently, up to a limit of 3. In this question, we'll allow pausing and resuming of the animation.

Requirements:

Initially there will be one empty progress bar.
The progress bars fill up gradually in parallel, up to a limit of 3 concurrent bars filling up. i.e. the fourth progress bar will only start filling up after the third progress bar is completely filled up.
Each bar takes approximately 2000ms to completely fill up.
Implement the following buttons with the functionality:

- Start/Pause: Starts/pauses the filling up of the progress bars. The button label turns into "Pause" when the animation is playing.
- Add: Appends a new progress bar to the bottom of the list.
- Reset: Resets to the initial state where there is only one empty bar and stops any running animations.

*/

import "./ProgressBar.css";

export const ProgressBar = (props) => {
  const { progress } = props;

  return (
    <div className="bar-container">
      <div
        className="bar-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
};
