import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import Header from './Header';
import Footer from './Footer';

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1e',
    background: '#1c1c1e',
    text: '#ffffff'
  },
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
