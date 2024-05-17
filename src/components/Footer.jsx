import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  background-color: transparent;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 16px;
  font-style: monospace;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph>2024 Vishwarya. All rights reserved.</Paragraph>
    </FooterContainer>
  );
};

export default Footer;
