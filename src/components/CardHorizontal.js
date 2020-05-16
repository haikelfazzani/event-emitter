import React from 'react';
import Img from './Img';
import '../styles/CardHorizontal.css';

export default function CardHorizontal ({ track, data }) {

  return (
    <div className="card mb-3 py-3 pr-3 pl-3">
      <div className="row no-gutters">
        <div className="col-md-2">
          <Img
            src={track.artwork_url ? track.artwork_url.replace('large.jpg', 't500x500.jpg') : null}
            clx="w-100"
            alt={track.title}
          />
        </div>
        <div className="col-md-10">
          <div className="d-flex flex-column ml-3">
            <h5 className="card-title color-orange">{track.title}</h5>
            <p className="card-text">{track.description}</p>
            <p className="card-text"><small className="text-muted">@{track.user.username} ({track.genre})</small></p>

            <div className="w-100 d-flex flex-wrap">
              {data.map(g => <span
                className="badge badge-dark mr-3 text-uppercase py-2 pr-2 pl-2 font-weight-normal lsp2"
                key={g}>{g}
              </span>)}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}