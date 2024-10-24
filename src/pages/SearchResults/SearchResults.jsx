import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Search Results</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="mb-4">
              <h2 className="font-semibold">{result.title}</h2>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;