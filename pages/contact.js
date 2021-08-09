import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import Icons from "@material-ui/icons";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    backgroundImage:
      "linear-gradient(to bottom left, hsl(237, 23%, 32%), hsl(237, 17%, 21%))",
    borderRadius: "0px 100px 0px 100px",
    height: "70vh",
    margin: "100px 0px",
  },
  background: {
    height: "70vh",
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
    display: "flex",
    justifyContent: "space-between",
    height: "70vh",
  },
  textDiv: {
    padding: "100px",
    display: "block",
    alignItems: "center",
    color: "white",
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
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.contactNav}>
        <MyNavbar />
      </div>
      <div className={classes.root}>
        <div className={classes.background}>
          <Container>
            <div className={classes.wrapper}>
              <div>
                <Image
                  src="/illustration-phones.svg"
                  alt="some"
                  width={552}
                  height={579}
                  className={classes.arrow}
                />
              </div>
              <div className={classes.textDiv}>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.subhead}
                >
                  Here are all options how to contact us
                </Typography>
                <br />
                <PhoneForwardedIcon className={classes.icon} /> 234235436346
                <br />
                <LinkedInIcon className={classes.icon} />
                dsfdsgds
                <br />
                <InstagramIcon className={classes.icon} />
                dfdsfdsfdsgds
                <br />
                <TwitterIcon className={classes.icon} />
                dsaf asf s
                <br />
                <FacebookIcon className={classes.icon} /> dsf sd
                <br />
                <MailOutlineIcon className={classes.icon} /> dfs fds
                <br />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
