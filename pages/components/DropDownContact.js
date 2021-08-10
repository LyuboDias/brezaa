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
    marginLeft: "30px",
  },
  paper: {
    marginRight: theme.spacing(2),
    minWidth: "100px",
  },
  btn: {
    textTransform: "none",
    color: "white",
    padding: "0",
    marginTop: "12px",
    borderRadius: "0",
    lineHeight: "14px",
    "&:hover": {
      backgroundColor: "inherit",
      borderBottom: "1px solid white",
    },
  },
  dropLink: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.6)",
    "&:hover": {
      color: "rgba(0, 0, 0, 1)",
    },
  },
  menuList: {
    padding: "8px 20px",
  },

  dropItem: {
    color: "rgba(0,0,0,0.6)",
    "&:hover": {
      color: "rgba(0,0,0,1)",
      backgroundColor: "white",
    },
  },
}));

export default function DropDownContact() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    let arrow = document.getElementById("arrow");
    arrow.classList.add("rotate");
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
          Contact &nbsp;
          <Image
            src="/icon-arrow-light.svg"
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
              <Paper>
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
                      <Link href="/contact">
                        <span className={classes.dropLink}>Contact</span>
                      </Link>
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
