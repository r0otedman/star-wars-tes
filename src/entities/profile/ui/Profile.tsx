import { LuUserRoundCog } from "react-icons/lu";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import styles from "./Profile.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";
import clsx from "clsx";

const ProfileIcon = () => {
  return (
    <div className={styles.profileIcon}>
      <LuUserRoundCog size={18} />
    </div>
  );
};

const ProfileContent = () => {
  return (
    <div className={styles.profileContent}>
      <AppLink className={styles.profileContentItem} to={"/profile"}>
        Account and Security
      </AppLink>
      <AppLink
        className={clsx(styles.profileContentItem, styles.logout)}
        to={"/profile"}
      >
        Log Out
      </AppLink>
    </div>
  );
};

const Profile = () => {
  return <Dropdown content={<ProfileContent />} trigger={<ProfileIcon />} />;
};

export default Profile;
