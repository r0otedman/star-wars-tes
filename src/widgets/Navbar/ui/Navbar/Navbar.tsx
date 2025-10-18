import styles from "./Navbar.module.scss";
import { NavbarItemList } from "./model/items";
import NavbarItem from "../NavbarItem/NavbarItem";
import { memo } from "react";
import Profile from "../../../../entities/profile";

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
        <div
          style={{
            width: "80px",
            height: "32px",
            backgroundColor: "green",
            borderRadius: "9999px",
          }}
        >
          dep
        </div>
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "blue",
            borderRadius: "50%",
          }}
        >
          w
        </div>
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "blue",
            borderRadius: "50%",
          }}
        >
          n
        </div>
        <div
          style={{
            width: "152px",
            height: "32px",
            backgroundColor: "red",
            borderRadius: "9999px",
          }}
        >
          wallet
        </div>
        <Profile />
      </div>
    </div>
  );
});
export default Navbar;
