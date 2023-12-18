import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useItemSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [commentTitles, setCommentTitles] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://hn.algolia.com/api/v1/search',
      params: { query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c),
    }).then((res) => {
      setCommentTitles(prevItems => {
        return [...new Set([...prevItems, ...res.data.hits.map(item => item.title)])];
      });
      setHasMore(res.data.hits.length > 0);
      setLoading(false);
      console.log(res.data.hits);
    }).catch((err) => {
      if (axios.isCancel(err)) return;
      setError(true);
    });
    return () => cancel();
  }, [query, pageNumber]);
  return {
    loading,
    error,
    commentTitles,
    hasMore,
  };
}