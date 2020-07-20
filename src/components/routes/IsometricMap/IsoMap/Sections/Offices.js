import React from 'react'
import styled from 'styled-components'
 
const Wrap = styled.div`
  width: 20%;
  height: 24%;
  transform: rotate(-40deg) skew(20deg, 13deg);
  position: absolute;
  top: 40%;
  left: 22%;
  // background: rgba(0,0,0,0.5);
`
 
const Offices = ({ updateCurrSec }) => {
  return (
    <Wrap 
      onMouseEnter={() => updateCurrSec(1)} 
      onMouseLeave={() => updateCurrSec(0)}    
    >
      
    </Wrap>
  )
}
 
export default Offices