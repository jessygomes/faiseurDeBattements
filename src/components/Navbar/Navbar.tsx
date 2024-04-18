"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.75,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={styles.nav}
    >
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
    </motion.nav>
  );
}
