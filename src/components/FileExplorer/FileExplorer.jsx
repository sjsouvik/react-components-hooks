import { useState } from "react";
import { ExplorerItem } from "./ExplorerItem";

export const data = {
  id: "0",
  name: "root",
  items: [
    {
      id: "1",
      name: "public",
      isFolder: true,
      items: [{ id: "2", name: "index.html", isFolder: false, items: [] }],
    },
    {
      id: "3",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "4",
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Accordion",
              isFolder: true,
              items: [{ name: "Accordion.jsx", isFolder: false, items: [] }],
            },
          ],
        },
        { id: "5", name: "index.js", isFolder: false, items: [] },
      ],
    },
    {
      id: "6",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(data);

  const updateData = (folderIdToUpdate, itemDetails) => {
    const updatedData = {
      ...explorerData,
      items: explorerData.items.map((item) =>
        item.id === folderIdToUpdate
          ? { ...item, items: [...item.items, itemDetails] }
          : item
      ),
    };

    setExplorerData(updatedData);
  };

  return (
    <div>
      <h2>File Explorer</h2>
      {explorerData.items.map((item) => (
        <ExplorerItem key={item.name} item={item} updateData={updateData} />
      ))}
    </div>
  );
};
