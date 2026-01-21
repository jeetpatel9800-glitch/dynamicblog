import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
      author,
      date: new Date().toLocaleDateString(),
    };
    addPost(newPost);
    navigate('/');
  };

  return (
    <FormWrapper>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextAreaField
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Author (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default CreatePost;
