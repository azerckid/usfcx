import React from "react"
import styled from "styled-components"


const Container = styled.div`
    width: 1200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
`;


const Title = styled.div`
    margin-top:50px;
    margin-bottom:50px;
    font-size: 32px;
    color:whitesmoke;
`;

const TextBox = styled.div`
    width: 1050px;
    height: 200px;
    padding-top: 20px;
    background-color:darkkhaki;
    font-size: 20px;
    text-align: center;
    
`;

export default ()=>{
    return (
        <Container>
            <Title>WHAT IS USFCX</Title>
            <TextBox>
            He was a linebacker for the Chicago Bears before he turned to another kind of a contact sport – trading on the Chicago Board Options Exchange.
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </TextBox>
            <TextBox>
            He was a linebacker for the Chicago Bears before he turned to another kind of a contact sport – trading on the Chicago Board Options Exchange.
            He became a member of the CBOE, NYSE, CME, and CBOT and worked as a floor trader for 25 years. In 1990, he founded Mercury Trading, a market-making firm at the Chicago Board Options Exchange (CBOE), which he sold in 2004 to Citadel, one of the world’s largest hedge funds.
            </TextBox>
        </Container>
    )
}