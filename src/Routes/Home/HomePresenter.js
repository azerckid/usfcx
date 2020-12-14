import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const HomePresenter = () => {
  return (
    <Container>
      <div>Hello world</div>
    </Container>
);
} 
  


export default HomePresenter;
