import { IoClose } from "react-icons/io5";
import styles from "./NotificationCard.module.scss";

const NotificationCard = ({ notification }: any) => {
  console.log(notification);
  return (
    <div className={styles.notificationCard}>
      <div className={styles.notificationCardContent}>
        <p className={styles.notificationCardTitle}>{notification.title}</p>
        <p className={styles.notificationCardText}>{notification.text}</p>
      </div>

      <IoClose size={18} />
    </div>
  );
};

export default NotificationCard;
