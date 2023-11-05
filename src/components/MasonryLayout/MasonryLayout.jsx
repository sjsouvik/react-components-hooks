import { data, arrangeData } from "./utils";
import "./MasonryLayout.css";

export const MasonryLayout = () => {
  return (
    <>
      <h2>Masonry Layout - Height balanced</h2>

      <ul className="list">
        {arrangeData(data).map(({ id, height, width, top, left }) => (
          <li
            key={id}
            className="list-item"
            style={{ height, width, top, left }}
          >
            {id}
          </li>
        ))}
      </ul>
    </>
  );
};
