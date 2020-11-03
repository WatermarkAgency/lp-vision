import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import LBHeaderAndHero from './LBHeaderAndHero/LBHeaderAndHero'
import LBPreviewDownload from './LBPreviewDownload'
 
const Wrap = styled.div`
  position: relative;
`
 
const LookbookDownloadLP = ({ data }) => {
  const { lp } = data;
  console.log(data)
  const { shortText1, shortText2, shortText3, shortText4, richText1, richText2, files, file1, file2 } = lp;
  return (
    <Wrap>
      <LBHeaderAndHero titleLine1={shortText1} titleLine2={shortText2} bg={files[0]} />
      <LBPreviewDownload preview={files[1]} buttonCopy={shortText4} />
    </Wrap>
  )
}
 
export default LookbookDownloadLP