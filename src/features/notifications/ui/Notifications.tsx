import { FaRegBell } from "react-icons/fa";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import styles from "./Notifications.module.scss";
import NotificationCard from "./NotificationCard";
import { memo } from "react";

const notifications = [
  { icon: "", title: "Welcome!", text: "Take bonus reward 10 usdt" },
  {
    icon: "",
    title: "First reward",
    text: "Your first reward waiting to you in rewards",
  },
];

const NotificationsContent = memo(({ notifications }: any) => {
  return (
    <div className={styles.notificationsContent}>
      <div className={styles.notificationsHeader}>
        <p>Notifications</p>
        <div className={styles.clearBtn}>Clear All</div>
      </div>
      <div>
        {notifications.map((notification) => (
          <NotificationCard notification={notification} />
        ))}
      </div>
    </div>
  );
});

const NotificationsTrigger = memo(({ notifications }) => {
  console.log(notifications.length);
  return (
    <div className={styles.notificationsTrigger}>
      {notifications.length !== 0 && (
        <div className={styles.sticker}>{notifications.length}</div>
      )}
      <FaRegBell size={18} />
    </div>
  );
});

const Notifications = memo(() => {
  return (
    <Dropdown
      content={<NotificationsContent notifications={notifications} />}
      trigger={<NotificationsTrigger notifications={notifications} />}
    />
  );
});

export default Notifications;
