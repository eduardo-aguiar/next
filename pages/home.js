import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import PostCard from "../components/PostCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0, 0.55), rgba(0,0,0, 0.55)), url('https://source.unsplash.com/lVLd6z5oVy8/1600x900')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  articleTitle: {
    fontWeight: 800,
    padding: theme.spacing(3),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <Box>GrowerLands</Box>
      </Box>
      <Container maxWidth="lg">
        <Typography variant="h4" className={classes.articleTitle}>
          Articles
        </Typography>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <PostCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PostCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PostCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
