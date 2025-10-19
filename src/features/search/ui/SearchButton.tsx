import { IoIosSearch } from "react-icons/io";
import styles from "./SearchButton.module.scss";
import { memo, MouseEventHandler } from "react";

interface SearchButtonProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const SearchButton = memo(({ onClick }: SearchButtonProps) => {
  return (
    <div onClick={onClick} className={styles.searchButton}>
      <IoIosSearch className={styles.searchButtonIcon} size={18} />
      <p className={styles.searchBtnText}>Search token</p>
    </div>
  );
});

export default SearchButton;
