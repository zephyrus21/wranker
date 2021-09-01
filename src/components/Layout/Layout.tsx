import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";
import Logo from "../../assets/logo.svg";
import { NextPage } from "next";
import { Brightness6Rounded } from "@material-ui/icons";

interface LayoutProps {
  title: string;
}

const Layout: NextPage<LayoutProps> = ({ children, title }) => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <header className={styles.header}>
        <Link href='/' passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <button
          className={styles.themeSwitcher}
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
              document.documentElement.setAttribute("data-theme", "dark");
            } else {
              document.documentElement.setAttribute("data-theme", "light");
              setTheme("light");
            }
          }}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>💖</footer>
    </div>
  );
};

export default Layout;
