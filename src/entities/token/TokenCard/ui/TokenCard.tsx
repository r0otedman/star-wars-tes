import { Token } from "../../model/types";
import styles from "./TokenCard.module.scss";
import AvatarPlaceholder from "../../../../shared/assets/avatar-paceholder.jpg";
import { PiCopySimple } from "react-icons/pi";
import useCopyToClipboard from "../../../../shared/lib/useCopyToClipboard";
import { getShortNumber } from "../../../../shared/lib/getShortNumber";

type TokenCardProps = {
  token: Token;
  mint: string;
};

const TokenCard = ({ token, mint }: TokenCardProps) => {
  const { copy } = useCopyToClipboard();

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); // Останавливаем всплытие события
    copy(token.baseMint);
  };

  return (
    <div className={styles.tokenCard} data-mint={mint}>
      <div className={styles.tokenInfo}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={
              token.tokenImage !== "no image"
                ? token.tokenImage
                : AvatarPlaceholder
            }
            alt=""
          />
        </div>
        <div>
          <div className={styles.tokenTitle}>
            {token.tokenSymbol}
            <div
              onClick={handleCopy} // Используем handleCopy вместо inline функции
              className={styles.tokenSubtitle}
            >
              <p className={styles.subText}>{token.tokenName}</p>
              <PiCopySimple size={16} className={styles.copyIcon} />
            </div>
          </div>
          <p className={styles.tokenDescr}>{token.tokenDescription}</p>
        </div>
      </div>
      <div className={styles.liq}>${getShortNumber(token.liquidity, 2)}</div>
      <div className={styles.liq}>${getShortNumber(token.volume24h, 2)}</div>
    </div>
  );
};

export default TokenCard;
