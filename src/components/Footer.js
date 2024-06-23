import React from 'react';
import styled from 'styled-components';
import FooterGraphic from '../assets/footer.svg';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background: url(${FooterGraphic}) no-repeat center/cover;
  position: relative;
  bottom: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 Ankit Pathak. All Rights Reserved.</p>
    <SocialLinks>
      <SocialLink href="https://github.com/axcl" target="_blank">
        <i className="fab fa-github"></i>
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/ultimate-ankit" target="_blank">
        <i className="fab fa-linkedin"></i>
      </SocialLink>
      <SocialLink href="https://stackoverflow.com/users/4412438/axcl" target="_blank">
        <i className="fab fa-stack-overflow"></i>
      </SocialLink>
    </SocialLinks>
  </FooterContainer>
);

export default Footer;
