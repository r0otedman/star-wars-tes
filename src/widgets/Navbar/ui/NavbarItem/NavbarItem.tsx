import { memo } from "react";
import AppLink from "shared/ui/AppLink/AppLink";
import { NavbarItemType } from "../Navbar/model/items";
import styles from "./NavbarIten.module.scss";

interface NavbarProps {
  item: NavbarItemType;
}

const NavbarItem: React.FC<NavbarProps> = memo(({ item }) => {
  return (
    <AppLink className={styles.navbarItem} to={item?.path}>
      {item.text}
    </AppLink>
  );
});

export default NavbarItem;
