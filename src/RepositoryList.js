import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, makeStyles } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { useDebounce } from "use-debounce";
import { SEARCH_FOR_REPOS } from "./queries";
import Repository from "./Repository";

const useStyle = makeStyles({
  noRepoNote: {
    marginTop: "1rem",
    textAlign: "center",
  },
  spinnerContainer: {
    justifyContent: "space-around",
    display: "flex",
    marginTop: "1rem",
  },
});

const RepositoryList = ({ searchTerm }) => {
  const classes = useStyle();
  const [expandedRepo, setExpandedRepo] = useState(null);
  const [debounceSearchTerm] = useDebounce(searchTerm, 1000);
  const { data, loading, error } = useQuery(SEARCH_FOR_REPOS, {
    variables: { search_term: debounceSearchTerm }}
    );

  useEffect(() => {
    setExpandedRepo(null);
  }, [data]);

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return (
      <Typography
        variant="overline"
        className={classes.noRepoNote}
        component="div"
        color="error"
      >
        {error}
      </Typography>
    );
  }
  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant="overline"
        className={classes.noRepoNote}
        component="div"
      >
        There is no such repository!
      </Typography>
    );
  }

  return (
    <div>
      {data.search.edges.map((repo, i) => (
        <Repository
          repo={repo}
          expanded={expandedRepo === i}
          onToggled={() => setExpandedRepo(i)}
          key={i}
        />
      ))}
    </div>
  );
};

export default RepositoryList;
