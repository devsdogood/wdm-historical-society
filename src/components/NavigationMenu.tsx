import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";
import styles from "../styles/NavItem.module.css";

const NavigationMenu: React.FC<{ menuItems: INavigationItem[] }> = ({
  menuItems,
}) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <img src="/logo.svg" width={80} height={80} />
        </Link>
        <Link href="#1800">
          <a className={styles.link}>
          1800s
          </a>
        </Link>
        <Link href="#1900">
          <a className={styles.link}>
          1900s
          </a>
        </Link>
        <Link href="#2000">
          <a className={styles.link}>
          2000s
          </a>
        </Link>
      </nav>
    </>
  );
};

export default NavigationMenu;
