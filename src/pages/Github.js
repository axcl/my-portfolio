import React from 'react';
import styled from 'styled-components';
import GithubProjects from '../components/GithubProjects';

const GithubContainer = styled.div`
  padding: 2rem;
  min-height: 80vh;
`;

const Github = () => (
    <GithubContainer>
        <h1>GitHub Projects</h1>
        <GithubProjects />
    </GithubContainer>
);

export default Github;
