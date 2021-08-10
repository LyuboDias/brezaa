import React from "react";
import Head from "next/head";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landing: {
    height: "70vh",
    backgroundImage:
      "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
    borderRadius: "0px 0px 0px 100px",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      backgroundImage:
        "linear-gradient(to bottom, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
    },
  },
  inner: {
    height: "70vh",
    backgroundImage: "url(/bg-pattern-intro.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "-1350px",
    backgroundPositionX: "-250px",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: "none",
    },
  },
  mobileBackground: {
    [theme.breakpoints.down("xs")]: {
      display: "block",
      height: "100vh",
      width: "100%",
      backgroundImage: "url(/bg-pattern-intro.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "1500px",
      backgroundPositionY: "-330px",
      backgroundPositionX: "-400px",
      borderRadius: "0px 0px 0px 100px",
    },
  },
}));

const theme = createMuiTheme({
  pallete: {
    primary: {
      main: "red",
    },
    secondary: "blue",
  },
  typography: {
    fontFamily: "Ubuntu",
  },
});

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
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <div className={classes.landing}>
          <div className={classes.inner}>
            <div className={classes.mobileBackground}>
              <MyNavbar />
              <MyBanner />
            </div>
          </div>
        </div>
        <Content1 />
        <Content2 />
        <Content3 />
        <MyFooter />
      </ThemeProvider>
    </div>
  );
  ``;
}
