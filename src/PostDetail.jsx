import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PostWrapper = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <PostWrapper>
      <h2>{post?.title}</h2>
      <p><strong>Category:</strong> {post?.category}</p>
      <p><strong>Author:</strong> {post?.author || 'Anonymous'}</p>
      <p>{post?.content}</p>
    </PostWrapper>
  );
};

export default PostDetail;
