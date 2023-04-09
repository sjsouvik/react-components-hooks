import { useState } from "react";
import FolderIcon from "../../assets/folder.png";
import openFolder from "../../assets/open-folder.png";

export const ExplorerItem = (props) => {
  const { item, updateData } = props;
  const [isOpen, setOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [addingFileOrFolder, setAddingFileOrFolder] = useState("");

  const addNewHandler = (e, typeOfNewItem) => {
    e.stopPropagation();

    setOpen(true);
    setShowInput(true);
    setAddingFileOrFolder(typeOfNewItem);
  };

  const inputKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      const newItem = {
        id: crypto.randomUUID(),
        name: e.target.value,
        isFolder: addingFileOrFolder === "folder",
        items: [],
      };

      updateData(item.id, newItem);
      setShowInput(false);
    }
  };

  if (!item.isFolder) {
    return <div className="mb">{item.name}</div>;
  }

  return (
    <>
      <div
        className="folder-wrapper mb"
        onClick={() => setOpen((open) => !open)}
      >
        <img
          src={isOpen ? openFolder : FolderIcon}
          height="15"
          width="15"
          alt="folder"
        />
        <span>{item.name}</span>
        <button onClick={(e) => addNewHandler(e, "file")}>File +</button>
        <button onClick={(e) => addNewHandler(e, "folder")}>Folder +</button>
      </div>

      <div
        style={{ display: isOpen ? "block" : "none", paddingLeft: "2.5rem" }}
      >
        {item.items.map((item) => (
          <ExplorerItem key={item.name} item={item} updateData={updateData} />
        ))}

        {showInput && (
          <input
            type="text"
            autoFocus
            className="mb-1"
            onKeyDown={inputKeyDownHandler}
            onBlur={() => setShowInput(false)}
          />
        )}
      </div>
    </>
  );
};
