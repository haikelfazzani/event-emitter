import React, { useEffect, useState } from 'react';
import ScService from '../services/ScService';
import ListTracks from '../containers/ListTracks';

export default function Search (props) {

  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    let userQuery = props.location.search.split("=");

    if (userQuery[1] && userQuery[1].length > 0) {
      ScService.searchQuery(userQuery[1])
        .then((result) => {
          if (result && result.length > 0) {
            setTracks([]);
            setTimeout(() => {
              setQuery(decodeURIComponent(userQuery[1]));
              setTracks(result);
            }, 500);
          }
        })
        .catch(e => { });
    }
  }, [props.location.search]);

  return (<>
    <div className="container mt-4 mb-0">
      <button className="btn btn-dark text-uppercase fs-12 lsp2 mr-0">
        <i className="fas fa-search fs-14"></i> Search results for
      </button>
      <button className="btn btn-primary text-uppercase fs-12 lsp2 m-0">{query || 'Not found'}</button>
    </div>
    <ListTracks tracks={tracks} />
  </>);
}