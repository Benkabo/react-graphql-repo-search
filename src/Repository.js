import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  makeStyles,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import IssueList from "./IssueList";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
  },
  summaryContainer: {
    flexDirection: "column",
  },
  summaryHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  chip: {
    marginLeft: "0.5rem",
  },
});

const Repository = ({ repo, expanded, onToggled }) => {
  const classes = useStyles();
  const {
    node: {
      name,
      descriptionHTML,
      owner: { login },
      stargazers: { totalCount: totalStarCount },
    },
  } = repo;

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggled}
      className={classes.root}
    >
      <AccordionSummary classes={{ content: classes.summaryContainer }}>
        <div className={classes.summaryHeader}>
          <Typography variant="h6"> {name} </Typography>
          <div>
            <Chip
              avatar={<PeopleIcon />}
              label={`by ${login}`}
              className={classes.chip}
            />
            <Chip
              label={totalStarCount}
              avatar={<StarIcon />}
              className={classes.chip}
            />
          </div>
        </div>
        <Typography
          variant="caption"
          dangerouslySetInnerHTML={{ __html: descriptionHTML }}
          component="div"
        />
      </AccordionSummary>
      <AccordionDetails>
        {expanded && <IssueList repoName={name} repoOwner={login} />}
      </AccordionDetails>
    </Accordion>
  );
};

export default Repository;
