import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = ({ posts, updatePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === parseInt(id));

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [category, setCategory] = useState(post?.category || '');
  const [author, setAuthor] = useState(post?.author || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: post.id,
      title,
      content,
      category,
      author,
      date: post.date,
    };
    updatePost(updatedPost, post.id);
    navigate('/');
  };

  return (
    <div className="form-wrapper">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="textarea-field"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Author (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPost;
