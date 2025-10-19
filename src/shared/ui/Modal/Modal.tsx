import { useEffect, useRef, useState } from "react";

import styles from "./Modal.module.scss";
import Portal from "../Portal/Portal";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  closeOnBackdrop?: boolean;
  ariaLabel?: string;
};

export function Modal({
  open,
  onClose,
  title,
  children,
  closeOnBackdrop = true,
  ariaLabel,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setClosing(false);
      lastActiveRef.current = document.activeElement as HTMLElement | null;
      // small timeout to allow CSS transition to trigger
      requestAnimationFrame(() => {
        const modal = containerRef.current?.querySelector(
          `.${styles.paper}`
        ) as HTMLElement | null;
        modal?.focus();
      });
      document.body.style.overflow = "hidden";
    } else if (mounted) {
      // play closing animation then unmount
      setClosing(true);
      document.body.style.overflow = "";
      const t = setTimeout(() => {
        setMounted(false);
        setClosing(false);
        lastActiveRef.current?.focus();
      }, 220 + 50);
      return () => clearTimeout(t);
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const modal = containerRef.current;
        if (!modal) return;
        const focusable = modal.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    if (mounted) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mounted, onClose]);

  if (!mounted) return null;

  return (
    <Portal>
      <div
        className={`${styles.backdrop} ${
          open && !closing ? styles.backdropOpen : ""
        }`}
        role="presentation"
        onMouseDown={(e) => {
          if (!closeOnBackdrop) return;
          if (e.target === e.currentTarget) onClose();
        }}
        ref={containerRef}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel ?? title ?? "Dialog"}
          tabIndex={-1}
          className={`${styles.paper} ${
            open && !closing ? styles.paperOpen : ""
          } ${closing ? styles.paperClosing : ""}`}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
}
