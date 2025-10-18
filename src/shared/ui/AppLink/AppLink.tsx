import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

const AppLink: React.FC<AppLinkProps> = memo((props) => {
  const { to, className, children, ...otherProps } = props;
  const cls = className ? `${styles.link} ${className}` : styles.link;

  return (
    <Link className={cls} to={to} {...otherProps}>
      {children}
    </Link>
  );
});

export default AppLink;
