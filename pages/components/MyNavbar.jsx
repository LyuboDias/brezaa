import React from "react";
import Link from "next/link";
import MainButton from "./MainButton";
import DropDownContact from "./DropDownContact";
import DropDownProduct from "./DropDownProduct";
import DropDownCompany from "./DropDownCompany";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

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
    cursor: "pointer",
  },
  home: {
    cursor: "pointer",
  },
}));

export default function MyNavbar() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <div className={classes.container}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="some"
            width={101}
            height={40}
            className={classes.home}
          />
        </Link>
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
