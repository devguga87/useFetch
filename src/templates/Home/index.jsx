import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

export const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('http://jsonplaceholder.typicode.com/posts' + postId, {
    headers: {
      abc: '20',
    },
  });

  useEffect(() => {
    console.log('ID DO POST', postId);
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((post) => (
            <div key={`post-${post.id}`} onClick={() => handleClick(post.id)}>
              <p>{post.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
};
