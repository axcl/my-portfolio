import React from 'react';
import styled from 'styled-components';
import ContactGraphic from '../assets/contact.svg';
import Footer from '../components/Footer';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 80vh;
  position: relative;
  padding-bottom: 4rem; /* Extra padding to avoid overlap with footer */
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  button {
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

const Contact = () => (
  <ContactContainer>
    <Section>
      <Content>
        <h1>Contact Me</h1>
        <p>Need me for any freelance, consulting, or some big projects? Feel free to send me a mail.</p>
        <Form action="mailto:ankit@oisance.com" method="POST" encType="multipart/form-data" name="ContactForm">
          <input type="text" name="name" placeholder="Full name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <textarea name="message" rows="5" placeholder="Message*" required></textarea>
          <button type="submit">Submit</button>
        </Form>
      </Content>
      <Graphic src={ContactGraphic} alt="Contact" />
    </Section>

  </ContactContainer>
);

export default Contact;
