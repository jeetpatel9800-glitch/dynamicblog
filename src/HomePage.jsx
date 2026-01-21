import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ posts, categories, deletePost }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredPosts = posts.filter(
    (post) => !selectedCategory || post.category === selectedCategory
  );

  return (
    <div className="home-page-wrapper">
      <h1>Blog Posts</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)} style={{ padding: '8px', margin: '10px 0' }}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="card-grid">
        {filteredPosts.map((post) => (
          <div className="post-card" key={post.id}>
            <div style={{ flex: 1 }}>
              <h2 className="post-title">{post.title}</h2>
              <p style={{ marginTop: 8, color: '#333' }}>{post.content.slice(0, 120)}...</p>
              <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>{post.author || 'Anonymous'} • {post.date}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Link to={`/post/${post.id}`}>
                <button className="btn">Read More</button>
              </Link>
              <Link to={`/edit/${post.id}`}>
                <button className="btn">Edit</button>
              </Link>
              <button className="btn" onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/create">
        <button className="btn">Create New Post</button>
      </Link>
    </div>
  );
};

export default HomePage;
