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
      case 'office-small':
        return {top: '39%', left: '26%', width: '11vw', height: '5vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'office-large':
        return {top: '50%', left: '26%', width: '15vw', height: '8vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'marketing':
        return {top: '13%', left: '19%', width: '18vw', height: '13vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'production-topLeft':
        return {top: '25%', left: '36%', width: '14vw', height: '5vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'production-middle':
        return {top: '29%', left: '44%', width: '12vw', height: '7vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'production-bottomLeft':
        return {top: '40%', left: '52%', width: '6vw', height: '4vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'production-bottomRight':
        return {top: '34%', left: '58%', width: '3vw', height: '6vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'digital-left':
        return {top: '45%', left: '55%', width: '15vw', height: '4vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'digital-right':
        return {top: '47%', left: '63%', width: '12vw', height: '5vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'shipping-room':
        return {top: '1%', left: '61%', width: '12vw', height: '29vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'shipping-truck':
        return {top: '53%', left: '65%', width: '20vw', height: '8vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'lf-left':
        return {top: '52%', left: '41%', width: '9vw', height: '5vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'lf-right':
        return {top: '58%', left: '50.5%', width: '5vw', height: '7vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
        break;
      case 'analytics':
        return {top: '59%', left: '37.5%', width: '6vw', height: '15vw', transform: 'rotate(-42deg) skew(20deg, 13deg)'};
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
    />
  )
}
 
export default PopupButton