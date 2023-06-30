export const getTabId = (tabsId, name) => {
  return `${tabsId}-tab-${name}`;
};

export const getTabPanelId = (tabsId, name) => {
  return `${tabsId}-panel-${name}`;
};

export const getIndexOfActiveTab = (tabs, activeTabTitle) => {
  return tabs.findIndex((tab) => tab.name === activeTabTitle);
};
