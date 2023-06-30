import { useId, useState } from "react";
import "./Tabs.css";
import { getTabId, getTabPanelId, getIndexOfActiveTab } from "./utils";

export const Tabs = (props) => {
  const { items, defaultActiveTab } = props;
  const tabsId = useId();
  const [activeTab, setActiveTab] = useState(defaultActiveTab ?? items[0].name);

  const clickHandler = (tabName) => {
    setActiveTab(tabName);
  };

  const updateActiveTab = (tabIndex) => {
    document.getElementById(getTabId(tabsId, items[tabIndex].name)).focus();
    setActiveTab(items[tabIndex].name);
  };

  const keydownHandler = (e) => {
    const activeTabTitle =
      document.activeElement.getAttribute("data-tab-title");

    if (activeTabTitle === null) {
      return;
    }

    const indexOfActiveTab = getIndexOfActiveTab(items, activeTabTitle);

    switch (e.code) {
      case "ArrowRight": {
        const indexOfNextTab = (indexOfActiveTab + 1) % items.length;
        updateActiveTab(indexOfNextTab);
        break;
      }

      case "ArrowLeft": {
        const indexOfPrevTab =
          (indexOfActiveTab - 1 + items.length) % items.length;
        updateActiveTab(indexOfPrevTab);
        break;
      }

      case "Home": {
        updateActiveTab(0);
        break;
      }

      case "End": {
        updateActiveTab(items.length - 1);
        break;
      }

      default:
        break;
    }
  };

  return (
    <>
      <div className="tabs" role="tablist" onKeyDown={keydownHandler}>
        {items.map((item) => {
          const isActiveTab = activeTab === item.name;

          return (
            <button
              key={item.name}
              id={getTabId(tabsId, item.name)}
              data-tab-title={item.name}
              role="tab"
              tabIndex={isActiveTab ? 0 : -1} // as per WAI-ARIA specification, only active tab should be focusable, we can achieve this by making non-active tabs non-focusable by adding tabIndex={-1} attribute to them
              aria-selected={isActiveTab}
              aria-controls={getTabPanelId(tabsId, item.name)}
              className={`tab ${isActiveTab ? "tab-active" : ""}`}
              onClick={() => clickHandler(item.name)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="mt-1">
        {items.map((item) => (
          <div
            key={item.name}
            id={getTabPanelId(tabsId, item.name)}
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={getTabId(tabsId, item.name)}
            hidden={activeTab !== item.name}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};
