import React from 'react'
import styled from 'styled-components'
 
const Wrap = styled.button`
  background: none;
  border: none;
  position: absolute;
  z-index: 15;
  // background: rgba(0,0,0,0.5);
`
 
const PopupButton = ({ pieceName, secIndex, updateOpenPiece, updateCurrSec }) => {
  const creatStyleObj = pName => {
    switch(pName) {
      case 'break-room':
        return {top: '38%', left: '18%', width: '8vw', height: '4vw', transform: 'rotate(-40deg) skew(20deg, 13deg)'};
        break;
      case 'other':
        return {};
        break;
      default: 
        return {};
    }
  }

  return (
    <Wrap
      onMouseEnter={() => updateCurrSec(secIndex)} 
      onMouseLeave={() => updateCurrSec(0)} 
      style={creatStyleObj(pieceName)} 
      onClick={() => {updateOpenPiece(pieceName)}} 
    >
      
    </Wrap>
  )
}
 
export default PopupButton