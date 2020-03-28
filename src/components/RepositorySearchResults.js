import * as React from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";

import Repository from "./Repository"
import SearchResult from "./SearchResult"

import styled from 'styled-components'

import {getRepositoryRoute}  from '../constants/routes'

const RepositorySearchResults = ({searchResults, match, children}) => {
  const repositories = useRepositoriesContext
  let { path, url } = useRouteMatch();

  const Header = styled.div`
    display: flex;
    justify-content: space-around;
  `
  const HeaderContent = styled.span `
    width: 300px;
  `

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
        <Link to={`${url}/${searchResult.id}`}>
          <SearchResult key={searchResult.id} searchResult={searchResult} />

          <Route path={`${path}/:id`} render={() => <Repository repository={searchResult} />} />
        </Link>))
      }
      {children}
    </ul>
  );
};

export default RepositorySearchResults;