import { useCallback, useMemo, useState } from "react";
import styles from "./TokenListTabs.module.scss";
import { useGetTokensQuery } from "app/api/swapi";

const tabs = [
  { label: "All DEXES", value: "All DEXES" },
  { label: "Pulse", value: "Pulse" },
  { label: "Random Tokens", value: "Random Tokens" },
];

const TokenListTabs = () => {
  const [activeTab, setActiveTab] = useState("All DEXES");

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
