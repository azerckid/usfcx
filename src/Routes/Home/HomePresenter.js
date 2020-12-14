import React from "react";
import styled from "styled-components";

import earth from "../../assets/img/stockEarth.jpg"
import earthsun from "../../assets/img/earth.jpg"
import TeamMember from "Components/TeamMember";
import Crews from "Components/Crews";
import Partners from "Components/Partners";

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


const HomePresenter = ({}) => {
  return (
    <Container>
      <BackImage img={earth} ></BackImage>
      <TeamMember></TeamMember>
      <Crews></Crews>
      <Partners></Partners>
    </Container>
);
} 
  


export default HomePresenter;
