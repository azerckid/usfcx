import React from "react";
import styled from "styled-components";

import earth from "../../assets/img/stockEarth.jpg"
import TeamMember from "Components/TeamMember";
import Crews from "Components/Crews";
import Partners from "Components/Partners";
import { Link } from "react-router-dom";

import shakeHands from "../../assets/img/shakeHands.jpg"
import WhyUsfcx from "Components/WhyUsfcx";
import PressRelease from "Components/PressRelease";
import WhatIs from "Components/WhatIs";
import RoadMap from "Components/RoadMap";






const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BackImage = styled.div`
 background-image: url(${(props)=> props.img});
 background-size: contain;
 background-position:center;
 background-repeat:no-repeat;
 width:1200px;
 height:800px;

 @media (max-width: 1280px) {
  background-size: cover;
 }
`;

const LoginButton = styled.div`
    position:fixed;
    right: 20px;
    bottom:20px;
    width: 100px;
    height: 100px;
    background-image: url(${(props)=> props.img});
    background-size: contain;
    background-position:center;
    background-repeat:no-repeat;
    border-radius:50%;
    z-index:10;
`;

const HomePresenter = () => {
  return (
    <Container>
      <BackImage img={earth} ></BackImage>
      <WhatIs></WhatIs>
      <WhyUsfcx styled={{id:"whyUsfcx"}}></WhyUsfcx>
      <RoadMap></RoadMap>
      <PressRelease></PressRelease>
      <TeamMember></TeamMember>
      <Crews></Crews>
      <Partners></Partners>
      <Link href="#">
        <LoginButton img={shakeHands}></LoginButton>
      </Link>
    </Container>
  );
} 

export default HomePresenter;
