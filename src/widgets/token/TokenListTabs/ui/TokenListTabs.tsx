import { useCallback, useMemo, useState } from "react";
import styles from "./TokenListTabs.module.scss";
import { useGetTokensQuery } from "../../../../api/swapi";

const tabs = [
  { label: "Trending", value: "Trending" },
  { label: "Top 100", value: "Top 100" },
  { label: "New", value: "New" },
];

const TokenListTabs = () => {
  const [activeTab, setActiveTab] = useState("Trending");

  const { refetch } = useGetTokensQuery();

  const handleClick = useCallback(
    async (value: string) => {
      setActiveTab(value);
      await refetch();
    },
    [refetch]
  );

  const tabList = useMemo(() => {
    return tabs.map((tab) => (
      <button
        key={tab.value}
        className={`${activeTab === tab.value ? styles.active : ""} ${
          styles.tabsListItem
        }`}
        onClick={() => handleClick(tab.value)}
      >
        {tab.label}
      </button>
    ));
  }, [activeTab, handleClick]);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsList}>{tabList}</div>
    </div>
  );
};

export default TokenListTabs;
