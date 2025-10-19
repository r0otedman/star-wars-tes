import { FaRegBell } from "react-icons/fa";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import styles from "./Notifications.module.scss";

const NotificationsContent = () => {
  return (
    <div>
      <div className={styles.notificationsHeader}>Notifications</div>
      <div>sdsds</div>
    </div>
  );
};

const NotificationsTrigger = () => {
  return (
    <div className={styles.notificationsTrigger}>
      <FaRegBell size={18} />
    </div>
  );
};

const Notifications = () => {
  return (
    <Dropdown
      content={<NotificationsContent />}
      trigger={<NotificationsTrigger />}
    />
  );
};

export default Notifications;
