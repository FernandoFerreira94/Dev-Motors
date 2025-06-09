"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);

  return (
    <header
      className={`${styles.header} ${!top ? styles.fixed : styles.background} `}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href="/">
            <div className={styles.logo}>
              <span className={styles.logo1}>Dev</span>
              <span className={styles.logo2}>Motors</span>
            </div>
          </Link>
          <nav className={styles.nav}>
            <Link href="/#home">Home</Link>
            <Link href="/#services">Serviços</Link>
            <Link href="/#contato">Contatos</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
