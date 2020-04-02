import React from 'react';

export default function Spinner () {
  return <div className="spinner-container">
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>;
}