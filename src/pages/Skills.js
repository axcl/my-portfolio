import React from 'react';
import styled from 'styled-components';
import { FaPython, FaPhp, FaNodeJs, FaJsSquare, FaReact, FaDocker, FaAws, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import SkillsGraphic from '../assets/skills.svg';

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Skills = () => (
  <SkillsContainer>
    <Section>
      <Content>
        <h1>Skills</h1>
        <SkillsGrid>
          <SkillCard>
            <FaPython size={30} />
            <span>Python</span>
          </SkillCard>
          <SkillCard>
            <FaPhp size={30} />
            <span>PHP</span>
          </SkillCard>
          <SkillCard>
            <FaNodeJs size={30} />
            <span>Node.js</span>
          </SkillCard>
          <SkillCard>
            <FaJsSquare size={30} />
            <span>JavaScript</span>
          </SkillCard>
          <SkillCard>
            <FaReact size={30} />
            <span>React</span>
          </SkillCard>
          <SkillCard>
            <FaDocker size={30} />
            <span>Docker</span>
          </SkillCard>
          <SkillCard>
            <FaAws size={30} />
            <span>AWS</span>
          </SkillCard>
          <SkillCard>
            <FaGoogle size={30} />
            <span>Google Cloud</span>
          </SkillCard>
          <SkillCard>
            <FaMicrosoft size={30} />
            <span>Azure</span>
          </SkillCard>
        </SkillsGrid>
      </Content>
      <Graphic src={SkillsGraphic} alt="Skills" />
    </Section>
  </SkillsContainer>
);

export default Skills;
