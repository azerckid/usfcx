import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const List = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Item = styled.li`
  width: 120px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#c05c67" : "transparent")};
  transition: border-bottom 0.2s ease-in-out;
  cursor: pointer;
`;

const Slink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: #656565;
`;

const RightNav = ({ location: { pathname }, open }) => {
  return (
    <List open={open}>
      <>
        <Item current={pathname === "/"}>
          <Slink to="/">HOME</Slink>
        </Item>
        <Item current={pathname === "/company"}>
          <Slink to="/company">COMPANY</Slink>
        </Item>
        <Item current={pathname === "/roadmap"}>
          <Slink to="/roadmap">ROADMAP</Slink>
        </Item>
        <Item current={pathname === "/product"}>
          <Slink to="/product">PRESS</Slink>
        </Item>
        <Item current={pathname === "/team"}>
          <Slink to="/team">TEAM</Slink>
        </Item>

        {/* <Item current={pathname === "/product"}>
            <Slink to="/product">PRODUCT</Slink>
          </Item>
          <Item current={pathname === "/detail"}>
            <Slink to="/detail">DETAIL</Slink>
          </Item> */}
        <Item style={{ color: "#c05c67", fontWeight: 600 }}>
          <Slink to="/"></Slink>
        </Item>
      </>
    </List>
  );
};

export default withRouter(RightNav);
