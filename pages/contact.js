import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import ContactForm from "./components/ContactForm";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(to bottom left, rgb(245,245,245), rgb(240,240,240))",
    borderRadius: "0px 100px 0px 100px",
    height: "100%",
    margin: "60px 0px",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  muted: {
    color: "hsl(208, 49%, 24%)",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: "300",
    },
  },
  subhead: {
    color: "hsl(208, 49%, 24%)",
    marginTop: "60px",
    fontSize: "40px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70vh",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "center",
      height: "100%",
      flexWrap: "wrap",
      paddingTop: "30px",
    },
  },
  textDiv: {
    padding: "50px 20px",
    display: "block",
    alignItems: "center",
    color: "hsl(208, 49%, 24%)",
    minWidth: "50%",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      padding: "20px 30px",
    },
  },
  social: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  contactNav: {
    height: "150px",
    backgroundImage:
      "linear-gradient(to bottom right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
    borderRadius: "0px 0px 0px 100px",
  },
  icon: {
    fontSize: "44px",
  },
  ul: {
    listStyle: "none",
    paddingLeft: "0",
    display: "inline-flex",
  },
  li: {
    paddingLeft: "20px",
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      width: "90%",
      height: "100%",
    },
  },
  desktop: {
    padding: "30px",
    marginTop: "50px",
    marginRight: "100px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.contactNav}>
        <MyNavbar />
      </div>
      <div className={classes.root}>
        <div>
          <Container>
            <div className={classes.wrapper}>
              <div className={classes.desktop}>
                <Image
                  src="/illustration-laptop-desktop.svg"
                  alt="some"
                  width={943}
                  height={786}
                />
              </div>
              <div className={classes.mobile}>
                <Image
                  src="/illustration-laptop-mobile.svg"
                  alt="some"
                  width={498}
                  height={352}
                />
              </div>
              <div className={classes.textDiv}>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.subhead}
                >
                  Contact Us
                </Typography>
                <ContactForm />
              </div>
            </div>
          </Container>
        </div>
        <Typography variant="h3" component="h5" className={classes.subhead}>
          Follow Us
        </Typography>
        <div className={classes.social}>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <LinkedInIcon className={classes.icon} />
            </li>
            <li className={classes.li}>
              <InstagramIcon className={classes.icon} />
            </li>
            <li className={classes.li}>
              <TwitterIcon className={classes.icon} />
            </li>
            <li className={classes.li}>
              <FacebookIcon className={classes.icon} />
            </li>
          </ul>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
