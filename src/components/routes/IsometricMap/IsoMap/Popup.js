import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
 
const Wrap = styled.div`
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.8);
  padding: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .image-wrap {
    width: 50%;
  }
  .copy-wrap {
    width: 50%;
    padding: 0 5%;
  }
  .close-button {
    position: absolute;
    top: 50px;
    left: 100px;
  }
`
 
const Popup = ({ data, sectionIndex, pieceIndex, updateOpenPiece }) => {
  const secData = data[sectionIndex]
  const piece = data[sectionIndex].sectionPieces[pieceIndex]
  const section = secData.title
  const title = piece.title
  const copy = piece.copy
  const image = piece.pieceImage
  const { fluid } = image ? image : null
  return (
    <Wrap>
      <div className="image-wrap">
        <Img fluid={fluid} alt={image.title} />
      </div>
      <div className="copy-wrap">
        <p>{section}</p>
        <p>{title}</p>
        {documentToReactComponents(copy.json)}
      </div>
      <button className="close-button" onClick={() => updateOpenPiece(null)}><span>x</span> RETURN</button>
    </Wrap>
  )
}
 
export default Popup