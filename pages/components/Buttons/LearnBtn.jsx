import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Ubuntu",
    minWidth: "120px",
    background: "transperant",
    border: "2px solid",
    borderColor: "white",
    borderRadius: 20,
    color: "white",
    padding: "8px 10px",
    textTransform: "none",
    margin: "0px 10px",
    "&:hover": {
      backgroundColor: "white",
      color: "hsl(356, 100%, 66%)",
    },
  },
});

function LearnBtn() {
  const classes = useStyles();
  return <Button className={classes.root}>Learn More</Button>;
}

export default LearnBtn;
