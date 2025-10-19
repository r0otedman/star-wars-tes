import { IoClose } from "react-icons/io5";
import AdCard from "entities/ad";
import styles from "./SubNavbar.module.scss";
import { AdType } from "entities/ad/model/types/ad";

const ads: AdType[] = [
  {
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/6c94a1186477153.6576a3a69d98c.jpg",
    text: "This space is available for your ad — reach your audience here.",
    link: "https://t.me/ro0tedman",
    wip: "red",
  },
  {
    icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
    text: "Technical work at 4pm",
    link: "#",
  },
  {
    icon: "https://ipfs.io/ipfs/Qmci2AG4ef5mhcCTBZS8zVqEL2JT3NWsUvwt4g1ThFThek",
    text: "Joy Casino BIG WIN",
    link: "https://joycasino.com/",
    wip: "pikachu",
  },
  {
    icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
    text: "Technical work at 4pm",
    link: "#",
  },
];

const inform: AdType[] = [
  {
    icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
    text: "Technical work at 4pm",
    link: "#",
  },
  {
    icon: "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/54/ff/a1/54ffa150-4c86-fba2-49a4-a5fff7687ab4/artwork.jpg/100x100bb.jpg",
    text: "Radio Record Phonk - The atmosphere of drifting and street racing",
    link: "https://www.radiorecord.ru/station/phonk",
    wip: "blue",
  },
  {
    icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
    text: "Technical work at 4pm",
    link: "#",
  },
  {
    icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
    text: "Technical work at 4pm",
    link: "#",
  },
  {
    icon: "https://ipfs.io/ipfs/QmUJ2K6zvkYiHkC8dYDTrDDYA52Bjiaoy5NUHWJqGYaBxv",
    text: "Technical work at 4pm",
    link: "#",
  },
];

const data: AdType[] = [...ads, ...inform];

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
        <p className={styles.blockAdText}>Ad</p>
        <IoClose className={styles.blockAdIcon} />
      </div>
    </div>
  );
};

export default SubNavbar;
