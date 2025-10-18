import { useNavigate } from "react-router-dom";
import { Token } from "../../../../entities/token/model/types";
import TokenCard from "../../../../entities/token/TokenCard";
import styles from "./TokenList.module.scss";

interface TokenListProps {
  data: Token[];
}

const TokenList: React.FC<TokenListProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleListClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Click detected!"); // Проверка клика

    const target = e.target as HTMLElement;
    console.log("Target:", target); // Что кликнули

    const card = target.closest("[data-mint]");
    console.log("Card found:", card); // Нашлась ли карточка

    if (card) {
      const mint = card.getAttribute("data-mint");
      console.log("Mint:", mint); // Получили ли mint

      if (mint) {
        console.log("Navigating to:", `/token/${mint}`); // Переходим
        navigate(`/token/${mint}`);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.listHeader}>
        <p>Token info</p>
        <p>Liquidity</p>
        <p>Volume</p>
      </div>
      <div
        className={`${styles.list} ${styles.scrollable}`}
        onClick={handleListClick}
      >
        {data?.map((token) => (
          <TokenCard token={token} key={token.ammId} mint={token.baseMint} />
        ))}
      </div>
    </div>
  );
};
export default TokenList;
