import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    backgroundImage:
      "linear-gradient(to bottom left, hsl(237, 23%, 32%), hsl(237, 17%, 21%))",
    borderRadius: "0px 100px 0px 100px",
    height: "50vh",
    margin: "100px 0px",
  },
  background: {
    height: "50vh",
    backgroundImage: "url(/bg-pattern-circles.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-200px",
    position: "relative",
  },
  muted: {
    color: "rgba(255,255,255,0.6)",
    marginTop: "30px",
  },
  subhead: {
    color: "white",
    marginTop: "60px",
  },
  wrapper: {
    position: "absolute",
    top: "-56px",
    display: "flex",
    justifyContent: "space-between",
    height: "70vh",
  },
  textDiv: {
    padding: "100px",
    display: "block",
    alignItems: "center",
  },
});

export default function Content2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Container>
          <div className={classes.wrapper}>
            <div>
              <Image
                src="/illustration-phones.svg"
                alt="some"
                width={1100}
                height={1200}
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
