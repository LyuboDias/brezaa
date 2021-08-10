import React from "react";
import SignUpBtn from "./SignUpBtn";
import LearnBtn from "./LearnBtn";
import StartBtn from "./StartBtn";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "50px 40px",
    },
  },
  muted: {
    color: "rgba(255,255,255,0.6)",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  headText: {
    color: "white",
    margin: "50px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "34px",
      margin: "30px 0px",
    },
  },
}));

export default function MyBanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h4" className={classes.headText}>
        A modern publishing platform
      </Typography>
      <Typography variant="h5" component="h6" className={classes.muted}>
        Grow your audience and build your online brand
      </Typography>
      <div>
        <StartBtn />
        <LearnBtn />
      </div>
    </div>
  );
}
