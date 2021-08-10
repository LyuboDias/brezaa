import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(/illustration-editor-desktop.svg)",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "900px",
    margin: "40px 0px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "200px",
    },
  },
  wrap: {
    textAlign: "left",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      textAlign: "center",
    },
  },
  mobileImg: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      width: "90%",
    },
  },
  muted: {
    color: "rgba(32,63,91,0.6)",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: "300",
    },
  },
  content1Head: {
    padding: "60px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },

  subhead: {
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  empty: {
    width: "50%",
    height: "90vh",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  container: {
    display: "flex",
  },
}));

export default function Content1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div>
          <Typography
            variant="h2"
            component="h3"
            className={classes.content1Head}
          >
            Designed for the future
          </Typography>
          <br />
          <div className={classes.mobileImg}>
            <Image
              src="/illustration-editor-mobile.svg"
              alt="some"
              width={406}
              height={331}
            />
          </div>
          <div className={classes.container}>
            <div className={classes.wrap}>
              <div>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.subhead}
                >
                  Introducing an extensible editor
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.muted}
                >
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.subhead}
                >
                  Robust content management
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.muted}
                >
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.
                </Typography>
              </div>
            </div>
            <div className={classes.empty}></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
