import AppLink from "shared/ui/AppLink/AppLink";
import { AdType } from "../model/types/ad";
import styles from "./AdCard.module.scss";
import clsx from "clsx";

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
    <AppLink
      to={ad.link}
      className={clsx(styles.adCard, ad.wip && styles.neonBox)}
    >
      <div className={styles.adCardimgWrapper}>
        <img width={22} src={ad.icon} alt="" />
      </div>
      <p>{ad.text}</p>
    </AppLink>
  );
};

export default AdCard;
