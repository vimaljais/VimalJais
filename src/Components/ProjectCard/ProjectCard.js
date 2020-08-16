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
  },
});

const ProjectCard = ({ imageFile, description, title, siteLink, gitLink }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={siteLink} rel="noopener" target="_blank">
          <CardMedia
            component="img"
            alt="Project Image"
            height="400"
            image={imageFile}
            title={title}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip
          className="grow"
          TransitionComponent={Zoom}
          title="Take me to the GitHub code of this Project"
          arrow
        >
          <Link href={gitLink} rel="noopener" target="_blank">
            <Button size="small" color="primary">
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
            <Button size="small" color="primary">
              Take me to App
            </Button>
          </Link>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
