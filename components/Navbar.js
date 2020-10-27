import React from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginBottom: "20px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <Box component="nav">
      <AppBar position="sticky">
        <Toolbar>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
