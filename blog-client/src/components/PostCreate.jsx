import { useState } from 'react';
import axios from 'axios';

function PostCreate() {
  const [title, setTitle] = useState('');

  const handleCreatePost = async (event) => {
    event.preventDefault();
    await axios
      .post('http://blog-posts.com/posts', {
        title,
      })
      .then((res) => {
        setTitle('');
      });
  };

  return (
    <div>
      <form onSubmit={handleCreatePost}>
        <div className='form-group'>
          <label className='m-1'>Title</label>
          <input
            className='form-control m-1'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary m-1'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostCreate;
