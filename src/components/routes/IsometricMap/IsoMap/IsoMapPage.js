import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Offices from './Sections/Offices'
import Popup from './Popup'
import PopupButton from './PopupButton'
 
const Wrap = styled.div`
  width: 100vw;
  height: 57.48vw;
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
      transition: opacity .3s ease;
      &.hidden {
        opacity: 0;
        transition: opacity .3s ease .15s;
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
  const [currSec, setCurrSec] = useState(0)
  const updateCurrSec = (sec) => {
    setCurrSec(sec)
    // console.log("currSec: ", currSec)
  }
  const [openPiece, setOpenPiece] = useState(null)
  const updateOpenPiece = (piece) => {
    setOpenPiece(piece)
  }

  // const popupData = openPiece !== null && sectionsData[currSec].sectionPieces !== null && 
  //   {
  //     section: sectionsData[currSec].title,
  //     image: sectionsData[currSec].sectionPieces[openPiece].pieceImage,
  //     title: sectionsData[currSec].sectionPieces[openPiece].title,
  //     copy: sectionsData[currSec].sectionPieces[openPiece].copy,
  //   }
  return (
    <Wrap>
      <div className="bgs-wrap">
        {sectionsData.map((section, i) => {
          const bg = section.backgroundOnHover;
          const { fluid } = bg ? bg : null
          return(
            <div className={currSec === i ? `bg` + ` section-` + i : `hidden bg` + ` section-` + i} key={section.title + i}>
              <Img fluid={fluid} alt={bg.title} />
            </div>
          )
        })}
      </div>
      <div className="hover-secs-wrap">
        <Offices updateCurrSec={updateCurrSec} updateOpenPiece={updateOpenPiece} pieces={sectionsData[1].sectionPieces} />
      </div>
      <div className="piece-buttons-wrap">
        {/* placeholder "break room" popup button */}
        <PopupButton pieceName="break-room" secIndex={1} updateOpenPiece={updateOpenPiece} updateCurrSec={updateCurrSec} />
      </div>
      {/* placeholder "break room" popup */}
      {openPiece === "break-room" && <Popup data={sectionsData} sectionIndex={1} pieceIndex={0} updateOpenPiece={updateOpenPiece} />}
    </Wrap>
  )
}
 
export default IsoMapPage