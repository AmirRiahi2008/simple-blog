'use client'
import Link from "next/link";
import styles from "./main-header.module.css";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>📝 My Blog</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href={"/"} className={path === '/' ? styles.active : styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/posts"} className={path === '/posts' ? styles.active : styles.navLink}>
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
