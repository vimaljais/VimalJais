import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Particles from "react-particles-js";
import Html5 from "./logos/html5.png";
import Css3 from "./logos/css3.png";
import Js from "./logos/js.png";
import Bootstrap from "./logos/bootstrap.png";
import Node from "./logos/node.png";
import ReactLogo from "./logos/react.png";
import Postgres from "./logos/postgres.png";
import Git from "./logos/git.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import ZoomAnimate from "react-reveal/Zoom";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import Amusik from "./Components/ProjectCard/Amusik.jpg";
import SmartBrain from "./Components/ProjectCard/SmartBrain.jpg";

const Projects = {
  Amusik: {
    title: "Amusik",
    Description: "A music streaming web app made with react and node.js",
    image: Amusik,
    siteLink: "https://amusik.herokuapp.com/",
    gitLink: "https://github.com/vimaljais/Amusik",
  },
  SmartBrain: {
    title: "SmartBrain Face Detection",
    Description: `A face detection app which accepts a image url and detects the face in it. Made with React, node.js, Clarifai API, and handles user database using Postgres. Signup required.`,
    image: SmartBrain,
    siteLink: "https://smart-brain-vimalj.herokuapp.com/",
    gitLink: "https://github.com/vimaljais/FaceRecognition-SmartBrain",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexBasis: "0%",
  },
  paper: {
    color: "white",
    background: "transparent",
    boxShadow: "0px 0px 0px 0px",
    display: "grid",
    height: "100vh",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    fontFamily: "Times New Roman",
    cursor: "default",
  },
}));

function App() {
  window.addEventListener("scroll", function () {
    console.log("Scrollin'");
  });

  const classes = useStyles();
  return (
    <div className="App">
      <Particles className="Particles" />
      <div>
        <Grid container spacing={0}>
          <Grid
            className="animate__animated animate__bounceIn"
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <Paper className={classes.paper}>
              Hello, I'm <div style={{ color: "#fe4066" }}>Vimal Jaiswal.</div>
              I'm a full-stack web developer.
            </Paper>
          </Grid>
          <Grid
            className="animate__animated animate__bounceInRight"
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <Paper className={classes.paper}>
              <h3
                style={{
                  marginBottom: "50px",
                  fontSize: "30px",
                  color: "gold",
                }}
              >
                <div
                  style={{
                    display: "inline",
                    border: "2px dodgerblue solid",
                    padding: "5px",
                    cursor: "default",
                  }}
                >
                  Skills
                </div>
              </h3>
              <Grid style={{ justifyContent: "center" }} container spacing={0}>
                <Grid>
                  <Tooltip
                    className="grow"
                    TransitionComponent={Zoom}
                    title="HTML5"
                    arrow
                  >
                    <img
                      style={{ width: "125px", height: "116px" }}
                      src={Html5}
                      alt="dsdds"
                    />
                  </Tooltip>
                </Grid>

                <Grid>
                  <Tooltip
                    className="grow"
                    TransitionComponent={Zoom}
                    title="CSS3"
                    arrow
                  >
                    <img
                      style={{ width: "125px", height: "116px" }}
                      src={Css3}
                      alt="CSS3"
                    />
                  </Tooltip>
                </Grid>
                <Grid>
                  <Tooltip
                    className="grow"
                    TransitionComponent={Zoom}
                    title="JavaScript"
                    arrow
                  >
                    <img
                      style={{ width: "125px", height: "116px" }}
                      src={Js}
                      alt="JavaScript"
                    />
                  </Tooltip>
                </Grid>
                <Grid>
                  <Tooltip
                    className="grow"
                    TransitionComponent={Zoom}
                    title="Bootstrap"
                    arrow
                  >
                    <img
                      style={{ width: "125px", height: "116px" }}
                      src={Bootstrap}
                      alt="Bootstrap"
                    />
                  </Tooltip>
                </Grid>
                <Grid>
                  <Tooltip
                    className="grow"
                    TransitionComponent={Zoom}
                    title="Node.js"
                    arrow
                  >
                    <img
                      style={{ width: "125px", height: "116px" }}
                      src={Node}
                      alt="Node.js"
                    />
                  </Tooltip>
                </Grid>
                <Grid>
                  <Tooltip
                    className="grow"
                    TransitionComponent={Zoom}
                    title="React"
                    arrow
                  >
                    <img
                      style={{ width: "125px", height: "116px" }}
                      src={ReactLogo}
                      alt="React"
                    />
                  </Tooltip>
                </Grid>
                <Grid>
                  <Tooltip
                    className="grow"
                    TransitionComponent={Zoom}
                    title="Postgres"
                    arrow
                  >
                    <img
                      style={{ width: "125px", height: "116px" }}
                      src={Postgres}
                      alt="Postgres"
                    />
                  </Tooltip>
                </Grid>

                <Grid>
                  <Tooltip
                    className="grow"
                    TransitionComponent={Zoom}
                    title="Git"
                    arrow
                  >
                    <img
                      style={{ width: "125px", height: "116px" }}
                      src={Git}
                      alt="Git"
                    />
                  </Tooltip>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <React.Fragment>
        <CssBaseline />
        <ZoomAnimate left>
          <Container style={{ height: "100vh" }} maxWidth="xl">
            <Typography
              component="div"
              style={{
                backgroundColor: "transparent",
                marginTop: "10px",
                paddingTop: "30px",
              }}
            >
              {" "}
              <div
                style={{
                  display: "inline",
                  border: "2px dodgerblue solid",
                  padding: "5px",
                  cursor: "default",
                  color: "white",
                  fontSize: "30px",
                }}
              >
                Recent Projects
              </div>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <ProjectCard
                  title={Projects.Amusik.title}
                  description={Projects.Amusik.Description}
                  imageFile={Projects.Amusik.image}
                  siteLink={Projects.Amusik.siteLink}
                  gitLink={Projects.Amusik.gitLink}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <ProjectCard
                  title={Projects.SmartBrain.title}
                  description={Projects.SmartBrain.Description}
                  imageFile={Projects.SmartBrain.image}
                  siteLink={Projects.SmartBrain.siteLink}
                  gitLink={Projects.SmartBrain.gitLink}
                />
              </Grid>
            </Grid>
          </Container>
        </ZoomAnimate>
      </React.Fragment>
    </div>
  );
}

export default App;
