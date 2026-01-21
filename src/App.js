import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import HomePage from './HomePage';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import EditPost from './EditPost';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const GlobalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
`;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [categories] = useState(['Technology', 'Lifestyle', 'Education']);

  // Fetch posts from local storage on load
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const addPost = (post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const updatePost = (updatedPost, id) => {
    const updatedPosts = posts.map((post) => (post.id === id ? updatedPost : post));
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <AppWrapper>
      <GlobalContainer>
      <Router>
        <Header />
        <main style={{ maxWidth: 1200, margin: '20px auto', padding: '0 16px' }}>
          <Routes>
            <Route path="/" element={<HomePage posts={posts} categories={categories} deletePost={deletePost} />} />
            <Route path="/create" element={<CreatePost addPost={addPost} />} />
            <Route path="/post/:id" element={<PostDetail posts={posts} />} />
            <Route path="/edit/:id" element={<EditPost posts={posts} updatePost={updatePost} />} />
          </Routes>
        </main>
      </Router>
      </GlobalContainer>
    </AppWrapper>
  );
};

export default App;
