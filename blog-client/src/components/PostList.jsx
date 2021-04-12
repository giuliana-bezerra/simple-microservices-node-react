import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function PostList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get('http://blog-posts.com/query/posts');
    setPosts(res.data);
  };

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className='card p-2'
        style={{ width: '30%', marginBottom: '20px' }}
      >
        <div id='card-body'>
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>
  );
}

export default PostList;
