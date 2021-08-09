import React from "react";
import Link from "next/link";
import MainButton from "./MainButton";
import DropDownContact from "./DropDownContact";
import DropDownProduct from "./DropDownProduct";
import DropDownCompany from "./DropDownCompany";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "150px",
    backgroundColor: "transperant",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 100px",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  container: {
    display: "flex",
  },
  login: {
    color: "white",
    textDecoration: "none",
    margin: "0px 20px",
  },
}));

export default function MyNavbar() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <div className={classes.container}>
        <img src="/logo.svg" alt="some"></img>
        <DropDownProduct />
        <DropDownCompany />
        <DropDownContact />
      </div>
      <div>
        <Link href="/">
          <span className={classes.login}>Login</span>
        </Link>
        <MainButton />
      </div>
    </Toolbar>
  );
}
