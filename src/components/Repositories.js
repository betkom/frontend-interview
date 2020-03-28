import * as React from "react";
import RepositorySearchResults from "./RepositorySearchResults"

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const Repositories = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [timeout, resetTimeout] = React.useState(0);


  const fetchSearchResults = (searchText) => {
    fetch(`https://api.github.com/search/repositories?q={${searchText}}`)
    .then(res => res.json())
    .then((response) => {
      setSearchResults(response.items)
    })
  }

  const onInputChange = (event) => {
    const searchText = event.target.value

    if(timeout) clearTimeout(timeout)
    resetTimeout(setTimeout(() => fetchSearchResults(searchText), 2000))
    
  }

  return (
    <div>
      <input name="search-terms" onChange={onInputChange} />
      {searchResults.length ? (
        <RepositorySearchResults searchResults={searchResults} />
      ) : (
        <div>Enter some test to search github repositories</div>
      )}
    </div>
  );
};

export default Repositories;
