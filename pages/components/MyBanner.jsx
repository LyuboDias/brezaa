import React from "react";
import MainButton from "./MainButton";
import SecondButton from "./SecondButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // display: "flex",
    textAlign: "center",
  },
  muted: {
    color: "rgba(255,255,255,0.6)",
    marginBottom: "30px",
  },
  headText: {
    color: "white",
    margin: "50px 0px",
  },
});

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
        <MainButton />
        <SecondButton />
      </div>
    </div>
  );
}
