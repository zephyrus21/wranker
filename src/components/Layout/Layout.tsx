import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";
import Logo from "../../assets/logo.svg";
import { NextPage } from "next";

interface LayoutProps {
  title: string;
}

const Layout: NextPage<LayoutProps> = ({ children, title }) => {
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
      </header>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>💖</footer>
    </div>
  );
};

export default Layout;
