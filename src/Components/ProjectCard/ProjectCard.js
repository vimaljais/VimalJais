import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "50px",
    background: "rgba(0, 0, 0, .7) ",
  },
  typo: {
    color: "dodgerblue",
  },
  typo2: {
    color: "white",
  },
  linkcolor: {
    color: "tomato",
  },
});

const ProjectCard = ({ imageFile, description, title, siteLink, gitLink }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        style={{ textDecoration: "none" }}
        href={siteLink}
        rel="noopener"
        target="_blank"
      >
        <CardActionArea>
          <Tooltip
            TransitionComponent={Zoom}
            title={title}
            placement="top"
            arrow
          >
            <CardMedia
              component="img"
              alt="Project Image"
              height="400"
              image={imageFile}
              title={title}
            />
          </Tooltip>

          <CardContent>
            <Typography
              className={classes.typo}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            <Typography className={classes.typo2} variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Tooltip
          className="grow"
          TransitionComponent={Zoom}
          title="Take me to the GitHub code of this Project"
          arrow
        >
          <Link href={gitLink} rel="noopener" target="_blank">
            <Button className={classes.linkcolor} size="small" color="primary">
              Github code
            </Button>
          </Link>
        </Tooltip>
        <Tooltip
          className="grow"
          TransitionComponent={Zoom}
          title="Browse the Project site"
          arrow
        >
          <Link href={siteLink} rel="noopener" target="_blank">
            <Button className={classes.linkcolor} size="small" color="primary">
              Take me to App
            </Button>
          </Link>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
