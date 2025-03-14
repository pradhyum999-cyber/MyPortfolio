import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;

  /* 
    Use flex column layout so text can stretch nicely 
    and distribute space more evenly.
  */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Slightly larger title for emphasis */
  font-size: calc(1em + 1vw);
  margin-bottom: 1rem;

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  /* Consistent font size for both boxes */
  font-size: calc(0.6em + 0.5vw);
  line-height: 1.4;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.8rem;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    display: inline-block; /* ensures margin-bottom applies */
  }

  ul,
  p {
    margin-left: 1.5rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        {/* First Box: Dynamics CRM */}
        <Main>
          <Title>
            <Design width={40} height={40} /> Dynamics CRM
          </Title>
          <Description>
            I love building robust CRM solutions that address real business needs. My focus is on
            creating efficient, user-friendly, and scalable designs.
          </Description>
          <Description>
            <strong>I Like to Develop</strong>
            <ul>
              <li>Custom plugins</li>
              <li>Data integrations and custom entities</li>
              <li>Webresources</li>
              <li>PCF</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Visual Studio / Visual Studio Code</li>
              <li>Git</li>
              <li>XRM Toolbox</li>
            </ul>
          </Description>
        </Main>

        {/* Second Box: Power Platform and Azure */}
        <Main>
          <Title>
            <Design width={40} height={40} /> Power Platform & Azure
          </Title>
          <Description>
            I value delivering integrated solutions that empower teams and boost productivity. I
            enjoy bridging business processes with innovative low-code and pro-code technologies.
          </Description>
          <Description>
            <strong>Power Platform Skills</strong>
            <ul>
              <li>Power Automate</li>
              <li>Model-Driven Apps</li>
              <li>Canvas Apps</li>
              <li>Virtual Agents</li>
            </ul>
          </Description>
          <Description>
            <strong>Integration</strong>
            <ul>
              <li>Azure DevOps</li>
              <li>Postman</li>
              <li>Azure Functions</li>
              <li>Azure Service Bus</li>
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
