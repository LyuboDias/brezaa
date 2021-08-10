import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textTransform: "none",
    fontFamily: "Ubuntu",
    minWidth: "120px",
    background: "rgb(255,255,255)",
    border: 0,
    borderRadius: 20,
    color: "hsl(356, 100%, 66%)",
    padding: "10px 12px",
    margin: "0px 10px",
    "&:hover": {
      backgroundColor: "hsl(355, 100%, 74%)",
      color: "white",
    },
  },
});

function SignUpBtn() {
  const classes = useStyles();
  return <Button className={classes.root}>Sign Up</Button>;
}

export default SignUpBtn;
