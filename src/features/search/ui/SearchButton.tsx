import { IoIosSearch } from "react-icons/io";
import styles from "./SearchButton.module.scss";
import { memo } from "react";

const SearchButton = memo(({ onClick }: any) => {
  return (
    <div onClick={onClick} className={styles.searchButton}>
      <IoIosSearch className={styles.searchButtonIcon} size={18} />
      <p className={styles.searchBtnText}>Search token</p>
    </div>
  );
});

export default SearchButton;
