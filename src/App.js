import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeProvider, { useTheme } from './styles/ThemeContext';
import GlobalStyle from './styles/globalstyles';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Github from './pages/Github';
import StackOverflow from './pages/StackOverflow';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const { toggleTheme } = useTheme();

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
          <Route path="/stackoverflow" element={<StackOverflow />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

const AppWithProviders = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithProviders;
