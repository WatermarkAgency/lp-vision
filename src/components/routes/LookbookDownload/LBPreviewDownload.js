import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Theme from '../../../vars/ThemeOptions'
import { Container, Row, Col } from 'react-bootstrap'
 
const WrapCont = styled(Container)`
  .content-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    .gatsby-image-wrapper {
      width: 90%;
    }
    a {
      background: ${Theme.hex('primary')};
      color: ${Theme.hex('white')};
      font-weight: 300;
      padding: 5px 15px;
      margin: 2rem 0 4rem 0;
      clip-path: polygon(5% 0%, 100% 0%, 100% 60%, 95% 100%, 0% 100%, 0% 40%);
      transform: scale(1);
      transition: transform .3s ease;
      :hover {
        text-decoration: none;
        transform: scale(1.1);
        transition: transform .3s ease;
      }
    }
  }
`
 
const LBPreviewDownload = ({ preview, buttonCopy }) => {
  // console.log("preview: ", preview)
  const { fluid, title } = preview ? preview : { preview: null }
  return (
    <WrapCont>
      <Row>
        <Col className="content-col">
          <Img fluid={fluid} alt={title} />
          <a href="#" role="download" download>
            {buttonCopy}
          </a>
        </Col>
      </Row>
    </WrapCont>
  )
}
 
export default LBPreviewDownload