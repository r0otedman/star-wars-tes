import { useParams } from "react-router-dom";
import { useGetTokensByMintQuery } from "../../../api/swapi";
import styles from "./TokenPage.module.scss";

const TokenPage = () => {
  const { mint } = useParams<{ mint: string }>();

  const { data: token, isLoading, error } = useGetTokensByMintQuery(mint || "");

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;
  if (!token) return <div>Токен не найден</div>;

  console.log(token);

  return (
    <div className={styles.container}>
      <h1>Токен {mint}</h1>
      <div>{token.tokenName}</div>
    </div>
  );
};

export default TokenPage;
