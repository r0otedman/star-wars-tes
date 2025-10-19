import { FaRegStar } from "react-icons/fa";
import styles from "./Favorites.module.scss";
import { memo } from "react";

const Favorites = memo(() => {
  return (
    <div className={styles.favorites}>
      <FaRegStar size={18} />
    </div>
  );
});

export default Favorites;
