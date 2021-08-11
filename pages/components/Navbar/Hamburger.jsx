import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 20px",
    right: "30px",
    left: "30px",
    bottom: "30px",
    borderRadius: "6px",
  },
  list: {
    width: 120,
    margin: "0px auto",
    padding: "10px 0px",
  },
  listItem: {
    textAlign: "center",
    margin: "10px 0px",
  },
  listWrap: {
    margin: "0px",
    padding: "20px",
  },

  sign: {
    marginTop: "20px",
    backgroundImage:
      "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
    borderRadius: "20px",
    color: "white",
    padding: "10px 12px",
    minWidth: "120px",
  },
  listDrop: {
    textAlign: "center",
    backgroundColor: "hsl(240, 2%, 79%)",
    borderRadius: "6px",

    margin: "0px auto",
    padding: "10px 0px",
  },
  listItemDrop: {
    margin: "6px auto",
  },
  login: {
    textDecoration: "none",
    color: "hsl(208, 49%, 24%)",
    margin: "0px auto",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
  },
}));

export default function Type() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.listWrap}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          Product &nbsp;
          <Image src="/icon-arrow-dark.svg" alt="some" width={10} height={7} />
        </ListItem>
        <ListItem className={classes.listItem}>
          Company &nbsp;
          <Image src="/icon-arrow-dark.svg" alt="some" width={10} height={7} />
        </ListItem>
        <ListItem className={classes.listItem}>
          Connect &nbsp;
          <Image src="/icon-arrow-dark.svg" alt="some" width={10} height={7} />
        </ListItem>
      </List>
      <List className={classes.listDrop}>
        <ListItem>
          <span className={classes.listItemDrop}>Contact</span>{" "}
        </ListItem>
        <ListItem>
          <span className={classes.listItemDrop}>Newsletter</span>{" "}
        </ListItem>
        <ListItem>
          <span className={classes.listItemDrop}>LinkedIn</span>{" "}
        </ListItem>
      </List>

      <Divider />
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link href="/">
            <span className={classes.login}>Login</span>
          </Link>
        </ListItem>
        <Button className={classes.sign}>Sign Up</Button>
      </List>
    </div>
  );

  return (
    <div className={classes.divBtns}>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor} className={classes.root}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Image
              src="/icon-hamburger.svg"
              alt="some"
              width={32}
              height={18}
              className={classes.hamburger}
              id="hamburger"
            />
            <Image
              src="/icon-close.svg"
              alt="some"
              width={26}
              height={26}
              className="close"
              id="close"
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
