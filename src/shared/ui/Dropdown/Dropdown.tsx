import { useState } from "react";
import styles from "./Dropdown.module.scss";
import { clsx } from "clsx";

type DropdownProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export const Dropdown = ({ trigger, content }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className={styles.container} onClick={toggle}>
      {trigger}
      <div className={clsx(styles.content, open && styles.open)}>{content}</div>
    </div>
  );
};
