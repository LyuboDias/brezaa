import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landing: {
    height: "80vh",
    backgroundImage:
      "linear-gradient(to bottom right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
    borderRadius: "0px 0px 0px 100px",
  },
  inner: {
    height: "80vh",
    width: "100%",
    backgroundImage: "url(/bg-pattern-intro.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-250px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Frontend Mentor | [Blogr]</title>
        <meta charset="UTF-8" />
        <meta name="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="Brezaa"
          content="Created with Next.js, React, Typescript and Material UI"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={classes.landing}>
        <div className={classes.inner}>
          <MyNavbar />
          <MyBanner />
        </div>
      </div>
      <Content1 />
      <Content2 />
      <Content3 />
      <MyFooter />
    </div>
  );
  ``;
}
