import React, {useState} from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import { ApolloProvider } from "@apollo/client";

import RepositoryList from "./RepositoryList";
import Searchbar from "./SearchBar";
import client from "./Client";
import Footer from "./Footer";

const useStyle = makeStyles({
  title: {
    marginTop: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
});

function App() {
  const classes = useStyle();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <ApolloProvider client={client}>
      <Container maxWidth="sm">
        <Typography variant="h3" className={classes.title}>
          Github Repository Search
        </Typography>
        <Searchbar value={searchTerm} onChange={setSearchTerm} />
        <RepositoryList searchTerm={searchTerm} />
        <Footer />
      </Container>
    </ApolloProvider>
  );
}

export default App;
