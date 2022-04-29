import React, { useState } from "react";
import Styled from "styled-components";
import Fade from 'react-reveal/Fade';
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <Container>
        <img src="/images/logo.svg" alt="logo" />

        <Menu>
          <a href="/">Model X</a>

          <a href="/">Model S</a>

          <a href="/">Model Y</a>

          <a href="/">Model 3</a>
          <a href="/">Solar Roof</a>
          <a href="/">Solar Panel</a>
        </Menu>
        <RightMenu>
          <a href="/">Shop</a>
          <a href="/">Tesla Account</a>
          <i class="fa-solid fa-bars"  onClick={()=>setisOpen(true)}></i>
        </RightMenu>
        {
          isOpen && <BurgerNav>
             <Fade right>
            <CloseButton>
           

              
            
            <i class="fa-solid fa-x" onClick={()=>setisOpen(false)}></i>
            </CloseButton>
          <li><a href="/">Existing Inventory</a></li>
          <li><a href="/">Used Inventory</a></li>
          <li><a href="/">Trade-In</a></li>
          <li><a href="/">Test Drive</a></li>
          <li><a href="/">Insurence</a></li>
          <li><a href="/">Cybertruck</a></li>
          <li><a href="/">Roadster</a></li>
          <li><a href="/">Semi</a></li>
          <li><a href="/">Charging</a></li>
          <li><a href="/">Powerwall</a></li>
          </Fade>
        </BurgerNav>
        }
       
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
right:0;
z-index:1
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

const BurgerNav = Styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
width:300px;
background:white;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
z-index:16;

li{
  padding:15px 0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  a{
    font-weight:600;
  }
}

`;

const CloseButton=Styled.div`
font-size:25px;
display:flex;
justify-content: flex-end;
`
export default Header;
