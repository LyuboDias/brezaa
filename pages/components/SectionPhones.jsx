import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(to bottom left, hsl(237, 23%, 32%), hsl(237, 17%, 21%))",
    borderRadius: "0px 100px 0px 100px",
    height: "60vh",
    margin: "100px 0px",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      borderRadius: "0px 100px 0px 100px",
      marginTop: "300px",
    },
  },
  background: {
    height: "60vh",
    backgroundImage: "url(/bg-pattern-circles.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-200px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      backgroundPositionY: "-150px",
      backgroundPositionX: "-70px",
      backgroundSize: "500px",
    },
  },
  muted: {
    color: "rgba(255,255,255,0.6)",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: "300",
    },
  },
  subhead: {
    color: "white",
    marginTop: "60px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  wrapper: {
    position: "absolute",
    top: "-56px",
    display: "flex",
    justifyContent: "space-between",
    height: "70vh",
    [theme.breakpoints.down("xs")]: {
      top: "160px",
    },
  },
  textDiv: {
    padding: "100px",
    display: "block",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  mobileImg: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      position: "absolute",
      top: "-180px",
    },
  },
  Img: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function SectionPhones() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <div className={classes.mobileImg}>
          <Image
            src="/illustration-phones.svg"
            alt="some"
            width={700}
            height={750}
          />
        </div>
        <Container>
          <div className={classes.wrapper}>
            <div className={classes.Img}>
              <Image
                src="/illustration-phones.svg"
                alt="some"
                width={1800}
                height={2000}
              />
            </div>
            <div className={classes.textDiv}>
              <Typography
                variant="h3"
                component="h5"
                className={classes.subhead}
              >
                State of the Art Infrastructure
              </Typography>
              <Typography variant="h6" component="h6" className={classes.muted}>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
