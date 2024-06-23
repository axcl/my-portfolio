import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
  .btn-primary {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: darken(${({ theme }) => theme.colors.primary}, 10%);
    }
  }
  

`;

export default GlobalStyle;
