import { IoClose } from "react-icons/io5";
import AdCard from "entities/ad";
import styles from "./SubNavbar.module.scss";

const ads = [
  {
    icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
    text: "Ad place is free!!!",
    link: "",
  },
  {
    icon: "https://ipfs.io/ipfs/Qmci2AG4ef5mhcCTBZS8zVqEL2JT3NWsUvwt4g1ThFThek",
    text: "Joy Casino BIG WIN",
    link: "",
    wip: true,
  },
];

const inform = [
  {
    icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
    text: "Technical work at 4pm",
    link: "",
  },
  {
    icon: "https://ipfs.io/ipfs/Qmci2AG4ef5mhcCTBZS8zVqEL2JT3NWsUvwt4g1ThFThek",
    text: "Joy Casino BIG WIN",
    link: "",
  },
];

const data = [...ads, ...inform];

const SubNavbar = () => {
  return (
    <div className={styles.subNavbar}>
      <div className={styles.trackWrapper}>
        <div className={styles.track}>
          {data.map((ad, i) => (
            <AdCard key={`set1-${i}`} ad={ad} />
          ))}
        </div>
        <div className={styles.track}>
          {data.map((ad, i) => (
            <AdCard key={`set2-${i}`} ad={ad} />
          ))}
        </div>
      </div>
      <div className={styles.blockAdBtn}>
        <p className={styles.blockAdText}>Ad</p>{" "}
        <IoClose className={styles.blockAdIcon} />
      </div>
    </div>
  );
};

export default SubNavbar;
