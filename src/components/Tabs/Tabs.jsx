import { useState } from "react";
import "./Tabs.css";

const TabItem = (props) => {
  const { children, isActive, ...restProps } = props;

  return (
    <div className={`tab-item ${isActive ? "active" : ""}`} {...restProps}>
      {children}
    </div>
  );
};

const Tabs = (props) => {
  const { children, defaultActive } = props;
  const [activeTab, setActiveTab] = useState(defaultActive);

  const changeTabHandler = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabItems = children.filter((item) => item.type.name === "TabItem");

  return (
    <>
      <div className="tab-menu">
        {tabItems.map(({ props: { index, label } }) => (
          <button
            key={`tab-button-${index}`}
            className={activeTab === index ? "active" : ""}
            onClick={() => changeTabHandler(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabItems.map(({ props }) => (
          <TabItem
            key={`tab-item-${props.index}`}
            isActive={activeTab === props.index}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export const TabExample = () => {
  return (
    <>
      <h2>Tabs</h2>
      <Tabs defaultActive="2">
        <TabItem label="Tab 1" index="1">
          Content to show under Tab 1
        </TabItem>
        <TabItem label="Tab 2" index="2">
          Content to show under Tab 2
        </TabItem>
        <TabItem label="Tab 3" index="3">
          Content to show under Tab 3
        </TabItem>
      </Tabs>
    </>
  );
};
