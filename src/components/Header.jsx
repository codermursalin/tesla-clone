import React from "react";
import Styled from "styled-components";
const Header = () => {
  return (
    <>
      <Container>
        <img src="/images/logo.svg" alt="logo" />

        <Menu>
          <a href="/">Model X</a>

          <a href="/">Model S</a>

          <a href="/">Model Y</a>

          <a href="/">Model 3</a>
        </Menu>
        <RightMenu>
          <a href="/">Shop</a>
          <a href="/">Tesla Account</a>
          <img src="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/000000/external-hamburger-ui-essential-febrian-hidayat-flat-febrian-hidayat.png" alt="menu"/>
        </RightMenu>
      </Container>
    </>
  );
};
const Container = Styled.div`
min-height: 60px;
position:fixed;
padding:0 20px;
display:flex;
align-items:center;
justify-content:space-between;
top:0;
left:0;
right:0
`;
const Menu = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap
}
@media(max-width:770px){
    display:none;
}
`;

const RightMenu = Styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap
}
img{
    height:30px;
    cursor:pointer
}
`;
export default Header;
