import styles from "./Navbar.module.scss";
import { NavbarItemList } from "./model/items";
import NavbarItem from "../NavbarItem/NavbarItem";
import { memo, useState } from "react";
import Profile from "entities/profile";
import WalletDisplay from "entities/WalletDisplay";
import Notifications from "features/notifications";
import Favorites from "features/favorites/ui/Favorites";
import Button from "shared/ui/Button/Button";
import SearchButton from "features/search";
import { Modal } from "shared/ui/Modal/Modal";

export const Navbar = memo(() => {
  const [open, setOppen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div style={{ fontSize: "32px", marginRight: "20px" }}>LOGO</div>
      {NavbarItemList.map((item) => (
        <NavbarItem key={item.text} item={item} />
      ))}
      <div className={styles.navbarControls}>
        <SearchButton />
        <Button
          onClick={() => setOppen(true)}
          className={styles.depBtn}
          variant="confirm"
        >
          Deposit
        </Button>
        <Favorites />
        <Notifications />
        <WalletDisplay />
        <Profile />
        <Modal onClose={() => setOppen(false)} open={open}>
          Content
        </Modal>
      </div>
    </div>
  );
});
export default Navbar;
