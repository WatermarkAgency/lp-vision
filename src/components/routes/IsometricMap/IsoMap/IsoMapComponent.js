import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Popup from './Popup'
import PopupButton from './PopupButton'
import HoverSection from './HoverSection'
 
const Wrap = styled.div`
  margin: 5rem 0;
  width: 100vw;
  height: 57.48vw;
  position: relative;
  .bgs-wrap {
    width: 100vw;
    height: 57.48vw;
    position: relative;
    z-index: 0;
    .bg {
      width: 100vw;
      height: 57.48vw;
      position: absolute;
      opacity: 1;
      transition: opacity .2s ease;
      &.hidden {
        opacity: 0;
        transition: opacity .2s ease .15s;
      }
    }
  }
  .hover-secs-wrap {
    width: 100vw;
    height: 57.48vw;
    position: absolute;
    top: 0;
    z-index: 10;
    // visibility for dev
    // background: blue;
    // opacity: .5;
  }
  .pieces-wrap {
    width: 100vw;
    height: 57.48vw;
    position: absolute;
    top: 0;
  }
`

const PieceButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  z-index: 15;
  &.break-room {
    top: 38%;
    left: 18%;
    width: 8vw;
    height: 4vw;
    transform: rotate(-40deg) skew(20deg, 13deg);
    // visibility for dev
    background: rgba(0,0,0,0.5);
  }
`
 
const IsoMapPage = ({ sectionsData }) => {
  // console.log("sectionsData: ", sectionsData)
  const [currSec, setCurrSec] = useState(0)
  const updateCurrSec = (sec) => {
    setCurrSec(sec)
    // console.log("currSec: ", currSec)
  }
  const [openPiece, setOpenPiece] = useState(null)
  const updateOpenPiece = (piece) => {
    setOpenPiece(piece)
  }

  return (
    <Wrap id="iso-map">
      <div className="bgs-wrap">
        {sectionsData.map((section, i) => {
          const bg = section.backgroundOnHover;
          const { fluid } = bg ? bg : null
          return(
            <div 
              className={currSec === i ? `bg` + ` section-` + i : `hidden bg` + ` section-` + i} 
              // style={{backgroundImage: `url(` + bg.file.url + `)`, backgroundSize: 'cover'}} 
              key={section.title + i}
            >
              <Img fluid={fluid} alt={bg.title} />
            </div>
          )
        })}
      </div>
      {/* NOTE - once time permits, I will make objects with all the data for the below pieces so that we can render them with maps instead of hard-coding each piece */}
      <div className="hover-secs-wrap">
        {/* Offices */}
        <HoverSection secIndex={1} updateCurrSec={updateCurrSec} />
        <HoverSection secIndex={1.5} updateCurrSec={updateCurrSec} />
        {/* Marketing */}
        <HoverSection secIndex={2} updateCurrSec={updateCurrSec} />
        <HoverSection secIndex={2.5} updateCurrSec={updateCurrSec} />
        {/* Production */}
        <HoverSection secIndex={3} updateCurrSec={updateCurrSec} />
        <HoverSection secIndex={3.5} updateCurrSec={updateCurrSec} />
        {/* Digital */}
        <HoverSection secIndex={4} updateCurrSec={updateCurrSec} />
        <HoverSection secIndex={4.5} updateCurrSec={updateCurrSec} />
        {/* Shipping */}
        <HoverSection secIndex={5} updateCurrSec={updateCurrSec} />
        <HoverSection secIndex={5.5} updateCurrSec={updateCurrSec} />
        {/* Large Format */}
        <HoverSection secIndex={6} updateCurrSec={updateCurrSec} />
        <HoverSection secIndex={6.5} updateCurrSec={updateCurrSec} />
        {/* Analytics */}
        <HoverSection secIndex={7} updateCurrSec={updateCurrSec} />
        <HoverSection secIndex={7.5} updateCurrSec={updateCurrSec} />
      </div>
      <div className="piece-buttons-wrap">
        {/* Offices */}
        <PopupButton pieceName="office-small" secIndex={1} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        <PopupButton pieceName="office-large" secIndex={1} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        {/* Marketing */}
        <PopupButton pieceName="marketing" secIndex={2} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        {/* Production */}
        <PopupButton pieceName="production-topLeft" secIndex={3} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        <PopupButton pieceName="production-middle" secIndex={3} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        <PopupButton pieceName="production-bottomLeft" secIndex={3} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        <PopupButton pieceName="production-bottomRight" secIndex={3} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        {/* Production */}
        <PopupButton pieceName="digital-left" secIndex={4} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        <PopupButton pieceName="digital-right" secIndex={4} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        {/* Shipping */}
        <PopupButton pieceName="shipping-room" secIndex={5} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        <PopupButton pieceName="shipping-truck" secIndex={5} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        {/* Large Format */}
        <PopupButton pieceName="lf-left" secIndex={6} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
        <PopupButton pieceName="lf-right" secIndex={6} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />  
        {/* Analytics */}
        <PopupButton pieceName="analytics" secIndex={7} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
      </div>

      {openPiece === "office-small" && <Popup data={sectionsData} sectionIndex={1} pieceIndex={0} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "office-large" && <Popup data={sectionsData} sectionIndex={1} pieceIndex={1} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "marketing" && <Popup data={sectionsData} sectionIndex={2} pieceIndex={0} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "production-topLeft" && <Popup data={sectionsData} sectionIndex={3} pieceIndex={0} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "production-middle" && <Popup data={sectionsData} sectionIndex={3} pieceIndex={2} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "production-bottomLeft" && <Popup data={sectionsData} sectionIndex={3} pieceIndex={1} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "production-bottomRight" && <Popup data={sectionsData} sectionIndex={3} pieceIndex={3} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "digital-left" && <Popup data={sectionsData} sectionIndex={4} pieceIndex={0} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "digital-right" && <Popup data={sectionsData} sectionIndex={4} pieceIndex={1} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "shipping-room" && <Popup data={sectionsData} sectionIndex={5} pieceIndex={0} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "shipping-truck" && <Popup data={sectionsData} sectionIndex={5} pieceIndex={1} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "lf-left" && <Popup data={sectionsData} sectionIndex={6} pieceIndex={0} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "lf-right" && <Popup data={sectionsData} sectionIndex={6} pieceIndex={1} updateOpenPiece={updateOpenPiece} />}
      {openPiece === "analytics" && <Popup data={sectionsData} sectionIndex={7} pieceIndex={0} updateOpenPiece={updateOpenPiece} />}
    </Wrap>
  )
}
 
export default IsoMapPage