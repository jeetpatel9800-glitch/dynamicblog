import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100%;
  background: linear-gradient(90deg,#1e3c72,#2a5298);
  color: white;
  padding: 12px 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 6px;
  background: rgba(255,255,255,0.06);

  &:hover{ background: rgba(255,255,255,0.12); }
`;

const Header = () => (
  <HeaderBar>
    <HeaderInner>
      <Brand to="/">Dynamic Blog</Brand>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create Post</NavLink>
      </Nav>
    </HeaderInner>
  </HeaderBar>
);

export default Header;
