import React from "react";
import styled from "styled-components";

import earth from "../../assets/img/vision.jpg";

const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BackImage = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1260px;
  height: 690px;
  margin: -5px;

  @media (max-width: 1280px) {
    background-size: cover;
  }
`;

const ContextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
  font-size: 45px;
  font-weight: 600;
  color: #9f7943;
`;

const SubTitle = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 36px;
  font-weight: 600;
  color: #9f7943;
`;

const TextBox = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 20px;
  line-height: 20px;
  color: white;
  font-size: 16px;
  text-align: center;
`;

export default () => {
  return (
    <Container>
      <BackImage img={earth}>
        <ContextContainer>
          <Title>VISION</Title>
          <SubTitle>"Vision 2024 - Lead the Next"</SubTitle>
          <TextBox>
            He was a linebacker for the Chicago Bears before he turned to
            another kind of a contact sport – trading on the Chicago Board
            Options Exchange. He became a member of the CBOE, NYSE, CME, and
            CBOT and worked as a floor trader for 25 years. In 1990, he founded
            Mercury Trading, a market-making firm at the Chicago Board Options
            Exchange (CBOE), which he sold in 2004 to Citadel, one of the
            world’s largest hedge funds. He was a linebacker for the Chicago
            Bears before he turned to another kind of a contact sport – trading
            on the Chicago Board Options Exchange.
          </TextBox>
          <Title style={{ marginTop: "50px" }}>MISSION</Title>
          <TextBox style={{ marginTop: "0px" }}>
            He was a linebacker for the Chicago Bears before he turned to
            another kind of a contact sport – trading on the Chicago Board
            Options Exchange. He became a member of the CBOE, NYSE, CME, and
            CBOT and worked as a floor trader for 25 years.
          </TextBox>
        </ContextContainer>
      </BackImage>
    </Container>
  );
};
