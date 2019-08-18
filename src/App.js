import React from "react";
import "./App.css";

import injectSheet from "react-jss";

function App({ classes }) {
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        header
        <br />
        header
        <br />
        header
        <br />
        header
        <br />
        header
        <br />
        header
        <br />
        header
        <br />
        header
        <br />
        header
        <br />
        header
        <br />
      </div>
      <div className={classes.main}>
        <div className={classes.xxx}>
          <div className={classes.mainStickEx}>Stick</div>
          <div className={classes.mainEx}>
            main <br />
            main <br />
            main <br />
            main <br />
            main <br />
            main <br />
            main <br />
            main <br />
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        footer
        <br />
        footer
        <br />
      </div>
    </div>
  );
}

const sheet = {
  body: {
    maxHeight: "100vh",
    minHeight: "100vh",
    maxWidth: "100vw",
    minWidth: "100vw",
    backgroundColor: "#CCC",
    display: "flex",
    flexDirection: "column"
  },

  header: {
    flex: [0, 1, "100%"],
    backgroundColor: "red"
  },
  main: {
    flex: [1],
    backgroundColor: "green",
    overflowY: "scroll",
    position: "relative"
  },

  xxx: {
    backgroundColor: "grey"
  },

  mainEx: {
    width: "auto",
    minHeight: 2000
  },

  mainStickEx: {
    position: "absolute",
    backgroundColor: "yellow",
    padding: 30,
    right: 20,
    top: 20
  },

  footer: {
    flex: [0, 1, "100%"],
    backgroundColor: "blue"
  }
};

export default injectSheet(sheet)(App);
