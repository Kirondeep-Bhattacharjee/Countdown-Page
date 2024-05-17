import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import Brandlogo from "../assets/preview (1).png"

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  padding-bottom: 10px;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999; 
`;

const Logo = styled.img`
 
  height: 80px; /* Adjust logo size */

`;

const StyledInstagramIcon = styled(InstagramIcon)`
   /* Adjust Instagram icon color */
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={Brandlogo} alt="Logo" />
      <StyledInstagramIcon sx={{ fontSize: 60 }} />
    </NavbarContainer>
  );
};

export default Navbar;
