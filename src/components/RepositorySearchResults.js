import * as React from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";

import Repository from "./Repository"
import SearchResult from "./SearchResult"

import styled from 'styled-components'

 const Header = styled.div`
  display: flex;
  justify-content: space-around;
`
const HeaderContent = styled.span `
  width: 300px;
`

const RepositorySearchResults = ({searchResults, match, children}) => {
  let { path, url } = useRouteMatch();

  return (
    <ul>
        <Header>
          <HeaderContent>Full Name</HeaderContent>
          <HeaderContent>Description</HeaderContent>
          <HeaderContent>Stargazer Counts</HeaderContent>
          <HeaderContent>Open issues Counts</HeaderContent>
          <HeaderContent>Match Score</HeaderContent>
        </Header>
      {
        searchResults.map((searchResult) => (
        <Link to={`${url}/${searchResult.id}`} key={searchResult.id}>
          <SearchResult key={searchResult.id} searchResult={searchResult} />

          <Route path={`${path}/:id`} render={() => <Repository repository={searchResult} />} />
        </Link>))
      }

    </ul>
  );
};

export default RepositorySearchResults;