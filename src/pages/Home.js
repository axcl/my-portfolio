import React from 'react';
import styled from 'styled-components';
import HomeGraphic from '../assets/home.svg';
import StackOverflowProfile from '../components/StackOverflowProfile';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 80vh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Graphic = styled.img`
  width: 50%;
  margin-left: 2rem;
`;

const Home = () => (
  <HomeContainer>
    <Section>
      <Content>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my professional journey and skills. Learn more about my experience and expertise.</p>
        <p>I am Ankit Pathak, an Executive Director - Technology at DistrictD, with a passion for programming and IT strategy. I have over 10 years of experience in the field, and I am proficient in a variety of modern technologies.</p>
        <Link to="/contact" className="btn-primary">Hire Me</Link>
      </Content>
      <Graphic src={HomeGraphic} alt="Home" />
    </Section>
  </HomeContainer>
);

export default Home;
