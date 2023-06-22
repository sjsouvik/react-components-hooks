/*

Implement a progress bar component which shows the completion progress by filling the bar proportionately to the progress (a number between 0-100, inclusive).

Requirements:

The filled bar can be of any color. The example uses #c5c5c5 for the background color and #0d6efd for the progress color.
The completion % is shown in the center of the filled bar.

*/
import "./ProgressBar.css";

const MIN = 0;
const MAX = 100;

export default function ProgressBar(props) {
  let { width } = props;

  width = Math.min(Math.max(width, MIN), MAX); // Handle invalid values and convert them to be within [0, 100].

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={width}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        style={{ width: `${width}%` }}
      >
        {width}%
      </div>
    </div>
  );
}
