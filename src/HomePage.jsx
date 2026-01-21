import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 10px 8px;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PostCard = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #f9f9f9;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 4px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = ({ posts, categories, deletePost }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredPosts = posts.filter(
    (post) => !selectedCategory || post.category === selectedCategory
  );

  return (
    <HomePageWrapper>
      <h1>Blog Posts</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)} style={{ padding: '8px', margin: '10px 0' }}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <CardGrid>
        {filteredPosts.map((post) => (
          <PostCard key={post.id}>
            <div style={{ flex: 1 }}>
              <Title>{post.title}</Title>
              <p style={{ marginTop: 8, color: '#333' }}>{post.content.slice(0, 120)}...</p>
              <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>{post.author || 'Anonymous'} • {post.date}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Link to={`/post/${post.id}`}>
                <Button>Read More</Button>
              </Link>
              <Link to={`/edit/${post.id}`}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={() => deletePost(post.id)}>Delete</Button>
            </div>
          </PostCard>
        ))}
      </CardGrid>
      <Link to="/create">
        <Button>Create New Post</Button>
      </Link>
    </HomePageWrapper>
  );
};

export default HomePage;
