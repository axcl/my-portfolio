import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../styles/ThemeContext';
import { lightTheme } from '../styles/themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <h1>{'<Ankit Pathak />'}</h1>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/github">GitHub</NavLink>
        <NavLink to="/stackoverflow">Stack Overflow</NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {theme === lightTheme ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
