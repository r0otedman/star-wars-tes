import { useGetTokensQuery } from "app/api/swapi";
import TokenList from "../../../widgets/token/TokenList";
import TokenListTabs from "../../../widgets/token/TokenListTabs";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  const { data, isLoading, error } = useGetTokensQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading tokens</div>;

  return (
    <div className={styles.homePage}>
      <TokenListTabs />
      <TokenList data={data ?? []} />
    </div>
  );
}
