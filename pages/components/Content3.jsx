import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(/illustration-laptop-desktop.svg)",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-270px",
    margin: "60px 0px",
    height: "100vh",
  },
  wrap: {
    textAlign: "left",
    width: "50%",
  },
  muted: {
    color: "rgba(32,63,91,0.6)",
    marginTop: "30px",
  },
  content1Head: {
    padding: "60px 0px",
  },
  subhead: {
    marginTop: "30px",
  },
  empty: {
    width: "50%",
    height: "90vh",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
});

export default function Content3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div>
          <div className={classes.container}>
            <div className={classes.empty}></div>
            <div className={classes.wrap}>
              <div>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.subhead}
                >
                  Free, open, simple
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.muted}
                >
                  Blogr is a free and open source application backed by a large
                  community of helpful developers. It supports features such as
                  code syntax highlighting, RSS feeds, social media integration,
                  third-party commenting tools, and works seamlessly with Google
                  Analytics. The architecture is clean and is relatively easy to
                  learn.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.subhead}
                >
                  Powerful tooling
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.muted}
                >
                  Batteries included. We built a simple and straightforward CLI
                  tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
