import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 100vh; /* Reduced height for a single centered view */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const ProjectCard = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  font-family: "Ubuntu Mono", monospace;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed; /* Keep the card fixed in the center */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 1vw);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: calc(0.8em + 0.5vw);
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const LinkButton = styled.a`
  text-decoration: none;
  color: inherit;
  border: 2px solid ${(props) => props.theme.text};
  padding: 0.5rem 1rem;
  font-size: calc(0.8em + 0.5vw);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const cardRef = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (cardRef.current) {
        // Keep the card centered and rotate around the Y-axis
        cardRef.current.style.transform = `translate(-50%, -50%) rotateY(${offset * 0.1}deg)`;
      }
      if (yinyang.current) {
        yinyang.current.style.transform = `rotate(${-offset}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        {/* If you want them, you can keep them. They are absolutely/fixed positioned anyway */}
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        {/* Watermark-style text in the background */}
        <BigTitlte
          text="WORK"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
            fontSize: "calc(5rem + 5vw)",
            opacity: 0.05,
          }}
        />

        <ProjectCard ref={cardRef}>
          <Title>GarageSuite360</Title>
          <Description>
            GarageSuite360 is a cutting-edge cloud-based platform designed to
            revolutionize vehicle garage management. It streamlines scheduling,
            maintenance, inventory, and customer management—empowering garages
            to operate more efficiently and deliver exceptional service.
          </Description>
          <LinkButton
            href="https://garagesuite360.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit GarageSuite360.in
          </LinkButton>
        </ProjectCard>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
