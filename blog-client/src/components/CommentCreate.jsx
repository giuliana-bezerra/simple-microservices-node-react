import axios from 'axios';
import { useState } from 'react';

function CommentCreate({ postId }) {
  const [content, setContent] = useState('');

  const handleCreateComment = async (event) => {
    event.preventDefault();
    await axios.post(`http://blog-posts.com/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };
  return (
    <div>
      <form onSubmit={handleCreateComment}>
        <div className='form-group m-1'>
          <label>New Comment!!</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary m-1'>Submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
