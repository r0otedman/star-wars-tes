import { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import { clsx } from "clsx";

type DropdownProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export const Dropdown = ({ trigger, content, className }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div className={clsx(styles.container, className)} ref={containerRef}>
        <div className={styles.trigger} onClick={toggle}>
          {trigger}
        </div>
        <div
          className={clsx(styles.content, open && styles.open)}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      </div>
      <div
        className={clsx(styles.overlay, open && styles.openOverlay)}
        onClick={close}
      ></div>
    </>
  );
};
