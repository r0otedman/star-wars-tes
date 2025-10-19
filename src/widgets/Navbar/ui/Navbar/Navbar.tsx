import styles from "./Navbar.module.scss";
import { NavbarItemList } from "./model/items";
import NavbarItem from "../NavbarItem/NavbarItem";
import { memo } from "react";
import Profile from "entities/profile";
import WalletDisplay from "entities/WalletDisplay";
import Notifications from "features/notifications";
import Favorites from "features/favorites/ui/Favorites";
import Button from "shared/ui/Button/Button";

export const Navbar = memo(() => {
  return (
    <div className={styles.navbar}>
      <div style={{ fontSize: "32px", marginRight: "20px" }}>LOGO</div>
      {NavbarItemList.map((item) => (
        <NavbarItem key={item.path} item={item} />
      ))}
      <div className={styles.navbarControls}>
        <div
          style={{
            width: "152px",
            height: "32px",
            backgroundColor: "red",
            borderRadius: "9999px",
          }}
        >
          search
        </div>
        <Button className={styles.depBtn} variant="confirm">
          Deposit
        </Button>
        <Favorites />
        <Notifications />
        <WalletDisplay />
        <Profile />
      </div>
    </div>
  );
});
export default Navbar;
