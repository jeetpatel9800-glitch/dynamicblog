import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div className="post-wrapper">
      <h2>{post?.title}</h2>
      <p><strong>Category:</strong> {post?.category}</p>
      <p><strong>Author:</strong> {post?.author || 'Anonymous'}</p>
      <p>{post?.content}</p>
    </div>
  );
};

export default PostDetail;
