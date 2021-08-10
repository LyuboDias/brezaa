import React from "react";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "300px",
    backgroundColor: "hsl(240, 10%, 16%)",
    color: "hsl(240, 2%, 79%)",
    display: "flex",
    justifyContent: "space-around",
    padding: "0 100px",
    borderRadius: "0px 100px 0px 0px",
    padding: "50px 50px",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      display: "block",
      textAlign: "center",
    },
  },
  footerLink: {
    color: "hsl(240, 2%, 79%)",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  footerLi: {
    padding: "6px 0px",
  },
  footerUl: {
    listStyle: "none",
    paddingLeft: "0",
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      padding: "60px 0px",
    },
  },
  wrap: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    },
  },
}));

export default function MyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Image
          src="/logo.svg"
          alt="some"
          width={101}
          height={40}
          className={classes.arrow}
        />
      </div>
      <div className={classes.wrap}>
        <h3>Product</h3>

        <ul className={classes.footerUl}>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Overview</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Pricing</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Marketplace</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Features</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Integrations</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h3>Company</h3>
        <ul className={classes.footerUl}>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>About</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Team</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Blog</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Careers</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h3>Connect</h3>
        <ul className={classes.footerUl}>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Contact</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>Newsletter</span>
            </Link>
          </li>
          <li className={classes.footerLi}>
            <Link href="/">
              <span className={classes.footerLink}>LinkedIn</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
