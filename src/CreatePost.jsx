import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 4px;
`;

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
