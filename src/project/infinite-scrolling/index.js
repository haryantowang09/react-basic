import React, { useState, useRef, useCallback } from 'react';
import useItemSearch from './useItemSearch';

const InfiniteScrolling = () => {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const {
    loading,
    error,
    commentTitles,
    hasMore,
  } = useItemSearch(query, pageNumber);
  
  const observer = useRef();
  const lastItemElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
        console.log('Visible');
      }
    });
    if (node) observer.current.observe(node);
    console.log(node);
  }, [loading, hasMore]);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      <div>
        <h1>InfiniteScrolling</h1>
        <input
          type="text"
          value={query}
          onChange={handleSearch}/>
        <ul>
          {commentTitles.map((commentTitle, index) => {
            if (commentTitles.length === index + 1) {
              return <li ref={lastItemElementRef} key={index}>{commentTitle}</li>
            } else {
              return <li key={index}>{commentTitle}</li>
            }
          })}
        </ul>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </div>
    </>
  );
};

export default InfiniteScrolling;