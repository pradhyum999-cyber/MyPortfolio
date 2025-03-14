import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import astronaut from '../assets/Images/spaceman.png';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1200px) {
    width: 25vw;
  }

  @media (max-width: 768px) {
    top: 5%;
    right: 2%;
    width: 30vw;
  }
  
  @media (max-width: 480px) {
    top: 3%;
    right: 2%;
    width: 40vw;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  max-height: 70vh;
  overflow-y: auto;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-size: calc(0.6rem + 1vw);
  
  @media (max-width: 1200px) {
    width: 60vw;
    max-height: 65vh;
  }

  @media (max-width: 900px) {
    width: 65vw;
    max-height: 60vh;
    left: calc(3rem + 5vw);
  }

  @media (max-width: 768px) {
    width: 80vw;
    max-height: 55vh;
    left: 10%;
    top: 15rem;
    padding: 1.5rem;
    font-size: calc(0.6rem + 1.2vw);
  }
  
  @media (max-width: 480px) {
    width: 85vw;
    left: 7.5%;
    top: 12rem;
    padding: 1rem;
    font-size: calc(0.6rem + 1vw);
    max-height: 50vh;
  }
`;

const AboutContent = styled.div`
  p {
    margin-bottom: 1.5rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const NavContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <NavContainer>
          <LogoComponent theme="dark" />
          <PowerButton />
          <SocialIcons theme="dark" />
        </NavContainer>
        
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          <AboutContent>
            <p>
              I'm passionate about empowering businesses to thrive through innovative CRM solutions.
              With over 4 years of hands-on experience as a Microsoft Dynamics 365 and Power Platform Specialist, I excel in delivering tailored solutions that streamline workflows, boost productivity, and address complex business challenges.
            </p>
            <p>
              My expertise spans Dynamics 365 CRM, Power Automate, PowerApps, and Azure technologies. By focusing on building custom JavaScript plugins, I extend the capabilities of CRM systems to meet unique business requirements.
            </p>
            <p>
              I'm committed to continuous learning and staying ahead of industry trends to ensure I bring real, measurable value to your team or business. Let's connect and explore how I can help you achieve sustainable growth.
            </p>
          </AboutContent>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;