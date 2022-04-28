import React from 'react'
import Styled from 'styled-components';
import Section from './Section';
const Home = () => {
  return (
    <>
    <Container>
    <Section
        title="Model S"
        description="Order Online for touchless delivary"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
    />

    <Section
        title="Model X"
        description="Order Online for touchless delivary"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
    />

    <Section
        title="Model Y"
        description="Order Online for touchless delivary"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
    />

<Section
        title="Model 3"
        description="Order Online for touchless delivary"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
    />

<Section
        title="Lowest Cost Sonal Panel in America"
        description="Money Back Gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
    />

<Section
        title="Solar For New Roofs"
        description="Solar Roof Costs less than a New Roof Plus Sonal Panel"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
    />
    <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
    />
    </Container>
    
    </>
  )
}
const Container=Styled.div`
height:100vh;

`

export default Home