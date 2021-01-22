import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  text-align: center;
  
  
`;

export const Home = (props) => (
  <GridWrapper>
    
    
   
    <p >  Here you can find some of our most  popular recipes: </p>
    
  </GridWrapper>
)