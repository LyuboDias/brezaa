import React from "react";
import styles from "../styles/Home.module.scss";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.container}>
      <MyNavbar />
      <div>
        <h1> This is Contact page</h1>
        <Link href="/"> Home</Link>
      </div>
      <MyFooter />
    </div>
  );
  ``;
}
