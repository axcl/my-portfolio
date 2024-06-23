import React from 'react';
import styled from 'styled-components';
import StackOverflowProfile from '../components/StackOverflowProfile';

const StackOverflowContainer = styled.div`
  padding: 2rem;
  min-height: 80vh;
`;

const StackOverflow = () => (
    <StackOverflowContainer>
        <h1>Stack Overflow Profile</h1>
        <StackOverflowProfile />
    </StackOverflowContainer>
);

export default StackOverflow;
