"use client";

import styles from "./styles.module.scss";

import { Undo2, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface SubMenuItem {
  title: string;
}

interface SubMenuProps {
  data: SubMenuItem[];
}

export default function SubMenu({ data }: SubMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu} id="home">
      <div className={styles.submenuIcons} onClick={toggleMenu}>
        <Menu size={34} color="#121212" /> Serviços
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <span className={styles.close}>
            <Undo2 size={25} color="red" onClick={toggleMenu} />
          </span>
        )}

        {data &&
          data.map((item, index) => (
            <Link key={index} href={`/service/${index.toString()}`}>
              {item.title}
            </Link>
          ))}
      </nav>
    </section>
  );
}
