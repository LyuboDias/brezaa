import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";
import HamburgerConnect from "./HamburgerConnect";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // marginLeft: "30px",
    position: "relative",
  },
  paper: {
    position: "absolute",
    width: "320px",
    height: "400px",
    margin: "40px auto",
    padding: "20px 60px",
    textAlign: "center",
    right: "-30px",
    zIndex: "99",
  },
  hr: {},
  login: {
    textDecoration: "none",
    color: "hsl(208, 49%, 24%)",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
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

  menuList: {
    display: "table",
    // height: "100%",
  },
  dropLink: {
    color: "hsl(208, 49%, 24%)",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
  },
  x: {
    display: "none",
  },
  dropItem: {
    padding: "10px 55px",
    color: "hsl(208, 49%, 24%)",
    "&:hover": {
      color: "rgba(0,0,0,1)",
      backgroundColor: "white",
    },
  },
}));

export default function Hamburger() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          className={classes.btn}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Image
            src="/icon-hamburger.svg"
            alt="some"
            width={32}
            height={18}
            id="burger"
          />
          {/* <Image
            src="/icon-close.svg"
            alt="some"
            width={32}
            height={18}
            className={classes.x}
            id="x"
          /> */}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    className={classes.menuList}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropItem}
                    >
                      Product &nbsp;
                      <Image
                        src="/icon-arrow-dark.svg"
                        alt="some"
                        width={10}
                        height={7}
                      />
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropItem}
                    >
                      Company &nbsp;
                      <Image
                        src="/icon-arrow-dark.svg"
                        alt="some"
                        width={10}
                        height={7}
                      />
                    </MenuItem>
                    <HamburgerConnect />
                  </MenuList>
                </ClickAwayListener>
                <hr className={classes.hr} />
                <br />
                <Link href="/">
                  <span className={classes.login}>Login</span>
                </Link>
                <br />
                <Button className={classes.sign}>Sign Up</Button>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
