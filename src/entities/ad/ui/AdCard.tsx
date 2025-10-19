import { AdType } from "../model/types/ad";
import styles from "./AdCard.module.scss";
import clsx from "clsx";
import pikachu from "../assets/pikachu.gif";

interface AdCardProps {
  ad?: AdType;
}

const adMock = {
  icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
  text: "Ad place is free!!!",
  link: "",
};

const AdCard = ({ ad = adMock }: AdCardProps) => {
  return (
    <a
      href={ad.link}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        styles.adCard,
        ad.wip == "blue" && styles.neonBox,
        ad.wip == "red" && styles.neonBoxRed,
        ad.wip == "pikachu" && styles.lightning
      )}
    >
      <div className={styles.adCardimgWrapper}>
        <img width={22} src={ad.icon} alt="" />
      </div>
      <p>{ad.text}</p>
      {ad.wip == "pikachu" && (
        <div className={styles.pikachuWrapper}>
          <img className={styles.pikachu} width={28} src={pikachu} alt="" />
          <img className={styles.pikachu} width={28} src={pikachu} alt="" />
          <img className={styles.pikachu} width={28} src={pikachu} alt="" />
        </div>
      )}
    </a>
  );
};

export default AdCard;
