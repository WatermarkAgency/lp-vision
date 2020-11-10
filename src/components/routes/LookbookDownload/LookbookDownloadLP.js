import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import LBBotCopy from './LBBotCopy'
import LBHeaderAndHero from './LBHeaderAndHero/LBHeaderAndHero'
import LBMainCopy from './LBMainCopy'
import LBPreviewDownload from './LBPreviewDownload'
 
const Wrap = styled.div`
  position: relative;
  font-family: Atlanta;
  .pull-up {
    position: relative;
    top: -18vw;
    @media only screen and (min-width: 1300px) {
      top: -15rem;
    }
    @media only screen and (max-width: 700px) {
      top: -20vw;
    }
  }
`
 
const LookbookDownloadLP = ({ data }) => {
  const { lp } = data;
  // console.log(data)
  const { shortText1, shortText2, shortText3, shortText4, richText1, richText2, files, file1, file2 } = lp;
  return (
    <Wrap>
      <LBHeaderAndHero titleLine1={shortText1} titleLine2={shortText2} bg={files[0]} />
      <div className="pull-up">
        <LBPreviewDownload preview={files[1]} buttonCopy={shortText4} />
        <LBMainCopy richText1={richText1} richText2={richText2} />
        <LBBotCopy shortText3={shortText3} />
      </div>
    </Wrap>
  )
}
 
export default LookbookDownloadLP