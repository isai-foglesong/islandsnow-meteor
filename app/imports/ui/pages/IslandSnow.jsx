import React from 'react';
import TopMenu from '../components/TopMenu';
import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';
import FooterMenu from '../components/FooterMenu';
import { Container } from 'react-bootstrap';

const IslandSnow = () => (
  <Container fluid>
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
  </Container>
);

export default IslandSnow;