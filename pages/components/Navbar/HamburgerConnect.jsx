import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: "25%",
    position: "relative",
  },
  paper: {
    position: "absolute",
    zIndex: "99",
    marginTop: theme.spacing(2),
    minWidth: "250px",
  },
  btn: {
    textTransform: "none",
    color: "hsl(208, 49%, 24%)",
    fontSize: "16px",
  },

  menuList: {
    padding: "8px 20px",
    backgroundColor: "rgb(240,240,240)",
  },

  dropItem: {
    padding: "10px 80px",
    color: "hsl(208, 49%, 24%)",
    "&:hover": {
      color: "rgba(0,0,0,1)",
      backgroundColor: "white",
    },
  },
}));

export default function HamburgerConnect() {
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
    let arrow = document.getElementById("arrow");
    arrow.classList.remove("rotate");
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
          Connect &nbsp;
          <Image
            src="/icon-arrow-dark.svg"
            alt="some"
            width={10}
            height={7}
            className={classes.arrow}
            id="arrow"
          />
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
                      Contact
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropItem}
                    >
                      Newsletter
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropItem}
                    >
                      LinkedIn
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
