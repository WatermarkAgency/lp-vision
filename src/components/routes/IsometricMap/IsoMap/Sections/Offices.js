import React from 'react'
import styled from 'styled-components'
import Popup from '../Popup'
 
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

const PlaceholderPieceButton = styled.button`
  background: none;
  border: none;
  position: relative;
  top: 0;
  left: 0;
  width: 40%;
  height: 30%;
  // visibility for dev
  background: rgba(0,0,0,0.5);
`
 
const Offices = ({ updateCurrSec, pieces, updateOpenPiece }) => {

  return (
    <Wrap 
      onMouseEnter={() => updateCurrSec(1)} 
      onMouseLeave={() => updateCurrSec(0)}    
    >
      <PlaceholderPieceButton onClick={() => {updateOpenPiece("placeholder piece")}} />
      {/* {openPiece === "placeholder piece" ? <Popup section="Offices" image={pieces[0].pieceImage} title={pieces[0].title} copy={pieces[0].copy} /> : null} */}
    </Wrap>
  )
}
 
export default Offices