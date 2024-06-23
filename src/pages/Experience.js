import React from 'react';
import styled from 'styled-components';
import SkillsGraphic from '../assets/skills.svg';

const ExperienceContainer = styled.div`
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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Experience = () => (
  <ExperienceContainer>
    <Section>
      <Content>
        <h1>Experience</h1>
        <CardContainer>
          <Card>
            <h3>Executive Director</h3>
            <p>DistrictD</p>
            <p>April 2023 - Present</p>
            <p>Noida, Uttar Pradesh, India</p>
          </Card>
          <Card>
            <h3>Co-Founder</h3>
            <p>Oisance Innovate Private Limited</p>
            <p>May 2024 - Present</p>
            <p>Lucknow, Uttar Pradesh, India</p>
          </Card>
          <Card>
            <h3>Technical Lead</h3>
            <p>PolicyBazaar.com</p>
            <p>February 2020 - April 2023</p>
            <p>New Delhi Area, India</p>
          </Card>
          <Card>
            <h3>Software Engineer</h3>
            <p>PolicyBazaar.com</p>
            <p>January 2019 - February 2020</p>
            <p>Gurgaon, India</p>
          </Card>
          <Card>
            <h3>Project Development Lead</h3>
            <p>Trancis</p>
            <p>January 2018 - January 2019</p>
            <p>Gurgaon, Haryana, India</p>
          </Card>
          <Card>
            <h3>Senior Web Developer</h3>
            <p>Trancis</p>
            <p>October 2015 - December 2017</p>
            <p>Gurgaon, India</p>
          </Card>
          <Card>
            <h3>Freelancer</h3>
            <p>Freelancer.com</p>
            <p>October 2014 - July 2015</p>
          </Card>
        </CardContainer>
      </Content>
      <Graphic src={SkillsGraphic} alt="Skills" />
    </Section>
  </ExperienceContainer>
);

export default Experience;
