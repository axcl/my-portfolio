import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const ProjectCard = styled.div`
  background: #282c34;
  border-radius: 10px;
  padding: 1rem;
  width: 300px;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  margin: 0.5rem 0;
  color: #61dafb;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
`;

const GitHubProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/axcl/repos')
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <ProjectsContainer>
            {projects.map((project) => (
                <ProjectCard key={project.id}>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <p>Stars: {project.stargazers_count} | Forks: {project.forks_count}</p>
                </ProjectCard>
            ))}
        </ProjectsContainer>
    );
};

export default GitHubProjects;
