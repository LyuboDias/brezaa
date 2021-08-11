import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
  label: {
    color: "hsl(208, 49%, 24%)",
    margin: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: "300",
    },
  },
  input: {
    margin: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  inputName: {
    margin: "10px 0px",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  submit: {
    backgroundImage:
      "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
    [theme.breakpoints.down("xs")]: {},
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <TextField
        label="First Name"
        variant="outlined"
        color="secondary"
        className={classes.inputName}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        color="secondary"
        required
        className={classes.inputName}
      />
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        required
        fullWidth
        className={classes.input}
      />

      <TextField
        label="Your Message"
        variant="outlined"
        color="secondary"
        required
        fullWidth
        multiline
        rows={4}
        className={classes.input}
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className={classes.submit}
        fullWidth
      >
        Submit
      </Button>
    </div>
  );
}
