import { FaRegStar } from "react-icons/fa";
import styles from "./Favorites.module.scss";

const Favorites = () => {
  return (
    <div className={styles.favorites}>
      <FaRegStar size={18} />
    </div>
  );
};

export default Favorites;
