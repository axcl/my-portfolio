import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import AboutGraphic from '../assets/home.svg';

const AboutContainer = styled(motion.div)`
  padding: 5rem 2rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const GraphicContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Graphic = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 2rem;
`;

const About = () => (
  <AboutContainer initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
    <TextContainer>
      <h1>About Me</h1>
      <p>
        I am Ankit Pathak, an Executive Director - Technology at DistrictD, with a passion for programming and IT strategy. I have over 10 years of experience in the field, and I am proficient in a variety of modern technologies.
      </p>
    </TextContainer>
    <GraphicContainer>
      <Graphic src={AboutGraphic} alt="About Graphic" />
    </GraphicContainer>
  </AboutContainer>
);

export default About;
