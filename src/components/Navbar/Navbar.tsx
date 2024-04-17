"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useState } from "react";

const itemNavbar = [
  {
    text: "Compositions",
    link: "/compositions",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div
        className={`${navActive ? styles.active : ""} ${styles.nav__menuList}`}
      >
        {itemNavbar.map((item, index) => {
          const active =
            item.link === "/"
              ? pathname === "/"
              : pathname.startsWith(item.link);
          return (
            <div key={index}>
              <Link
                href={item.link}
                className={`${styles.nav__item} ${
                  active ? styles.activeLink : ""
                }`}
              >
                <div
                  className={`${styles.div__item} ${
                    active ? styles.activeLink : ""
                  }`}
                >
                  {item.text}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
