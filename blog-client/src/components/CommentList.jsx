import axios from 'axios';
import { useEffect, useState } from 'react';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`,
    );
    setComments(res.data);
  }

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
