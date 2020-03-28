import * as React from "react";

import styled from 'styled-components'

const Card = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 0.25em 1em;
  margin: 5px 0;
  border: 1px solid #E0E1E5;
  border-radius: 3px;
`
const Span = styled.span`
  width: 300px;
  text-overflow: ellipsis;
`

const SearchResult = ({searchResult}) => {
  const fetchSearchResults = (searchText) => {
    fetch(`https://api.github.com/search/repositories?q={${searchText}}`)
    .then(res => res.json())
    .then((response) => {
      console.log('jdfjjdkjfk')
    })
  }

  return (
    <Card>
      <Span>{searchResult.full_name}</Span>
      <Span>{searchResult.stargazers_count}</Span>
      <Span>{searchResult.description}</Span>
      <Span>{searchResult.open_issues}</Span>
      <Span>{searchResult.score}</Span>
    </Card>
  );
};

export default SearchResult;