import React from "react";
import Link from "next/link";
import SignUpBtn from "./SignUpBtn";
import Hamburger from "./Hamburger";
import DropDownContact from "./DropDownContact";
import DropDownProduct from "./DropDownProduct";
import DropDownCompany from "./DropDownCompany";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "150px",
    backgroundColor: "transperant",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 100px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    minWidth: "500px",
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
  hamburger: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "space-between",
      height: "150px",
      padding: "70px 30px 0px 30px",
    },
  },
}));

export default function MyNavbar() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.hamburger}>
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="some" width={101} height={40} />
          </Link>
        </div>
        <div>
          <Hamburger />
        </div>
      </div>
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
          <SignUpBtn />
        </div>
      </Toolbar>
    </div>
  );
}
