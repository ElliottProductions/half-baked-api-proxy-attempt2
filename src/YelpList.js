import React from 'react';

export default function YelpList({ results }) {
  return (
    <div>
      {results.map(result =>
        <div className="yelp-item" key={result.index}>
          <h5>{result.name}</h5>
          <p>{result.display_phone}</p>
          <img src={`${result.image_url}`}/>
        </div>
      )}
    </div>
  );
}
