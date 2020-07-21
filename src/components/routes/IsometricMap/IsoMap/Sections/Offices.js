import React from 'react'
import styled from 'styled-components'
 
const Wrap = styled.div`
  width: 20%;
  height: 24%;
  transform: rotate(-40deg) skew(20deg, 13deg);
  position: absolute;
  top: 40%;
  left: 22%;
  // visibility for dev
  background: rgba(0,0,0,0.3);
`

 
const Offices = ({ updateCurrSec, pieces, updateOpenPiece }) => {

  return (
    <Wrap 
      onMouseEnter={() => updateCurrSec(1)} 
      onMouseLeave={() => updateCurrSec(0)}    
    >
      
    </Wrap>
  )
}
 
export default Offices