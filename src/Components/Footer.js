import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  background-color: black;
  color: white;
`;

export default () => {
  return (
    <Container>
      <div>USFCX</div>
      <div>
        <span>AAAAA</span>
        <span>BBBBB</span>
        <span>CCCCC</span>
        <span>DDDDD</span>
        <span>EEEEE</span>
      </div>
      <div>
        <div>
          <span>AAAAA</span>
          <span>BBBBB</span>
          <span>CCCCC</span>
          <span>DDDDD</span>
        </div>
        <span>copyright</span>
      </div>
    </Container>
  );
};
