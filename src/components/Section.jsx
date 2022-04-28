import React from "react";
import Styled from "styled-components";
const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap imageLink={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

const Wrap = Styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${(props) => `url("images/${props.imageLink}")`}
`;

const ItemText = Styled.div`
padding-top:15vh;
text-align:center
`;

const ButtonGroup = Styled.div`
display:flex;
margin-bottom:40px


@media(max-width:768px){
    flex-direction: column;
}
`;

const LeftButton = Styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:14px;
cursor:pointer
`;
const RightButton = Styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`;

const DownArrow = Styled.img`
height:40px;
margin-top:20px;
animation:animateDown infinite 1.5s
`;

const Buttons = Styled.div`
display:flex;
flex-direction:column;
align-items:center

`;
export default Section;
