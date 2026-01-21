import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 4px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

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
    <FormWrapper>
      <h2>Edit Post</h2>
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

export default EditPost;
