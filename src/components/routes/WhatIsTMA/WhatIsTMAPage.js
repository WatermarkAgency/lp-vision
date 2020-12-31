import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BLOCKS } from '@contentful/rich-text-types'
import { IoMdArrowDropright } from 'react-icons/io'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import WhatIsHeaderAndHero from './WhatIsHeaderHero/WhatIsHeaderHero'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Theme from '../../../vars/ThemeOptions'
import Form from './Form'


const growOnHover = `
  transform: scale(1);
  transition: all .3s ease;
  :hover {
    transform: scale(1.1);
    transition: all .3s ease;
  }
`

const Wrap = styled.div`
  font-family: Atlanta;
  // font-weight: 200;
  color: ${Theme.hex('textPrimary')};
  h4 {
    color: ${Theme.hex('primary')};
  }
  .row {
    margin-top: 1rem;
    margin-bottom: 1rem;
    &.border-top-bot {
      border-top: 1px solid ${Theme.hex('primary')};
      border-bottom: 1px solid ${Theme.hex('primary')};
      padding: 1rem 0;
      margin-top: 3rem;
    }
  }
  button {
    border: none;
    padding: .25rem 2rem;
    background: ${Theme.hex('primary')};
    color: white;
    clip-path: polygon(5% 0%, 100% 0%, 100% 60%, 95% 100%, 0% 100%, 0% 40%);
    transform: scale(1);
    transition: all .3s ease;
    :hover {
      transform: scale(1.1);
      transition: all .3s ease;
    }
  }
  .centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
const PullUp = styled.div`
  position: relative;
  top: -7rem;
`
const PreviewWrap = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;  
  .gatsby-image-wrapper {
    width: 65vw;
    max-width: 65rem;
  }
  @media only screen and (max-width: 575px) {
    .gatsby-image-wrapper {
      width: 90vw;
    }
  }
`
const CTA = styled.a`
  padding: .25rem 2rem;
  background: ${Theme.hex('primary')};
  color: white;
  text-decoration: none;
  clip-path: polygon(5% 0%, 100% 0%, 100% 60%, 95% 100%, 0% 100%, 0% 40%);
  transform: scale(1);
  transition: all .3s ease;
  :hover {
    color: white;
    text-decoration: none;
    transform: scale(1.1);
    transition: all .3s ease;
  }
`
const LeftCol = styled(Col)`
  border-right: 1px solid ${Theme.hex('primary')};
  padding-right: 1rem;
  margin-top: 1rem;
  h4 {
    margin-bottom: 1.5rem;
  }
  .tma-cta-wrap {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    a {
      display: block;
      border: 3px solid ${Theme.hex('primary')};
      color: ${Theme.hex('textPrimary')};
      padding: 1rem;
      width: 20rem;
      font-weight: bold;
      ${growOnHover}
      :hover {
        text-decoration: none;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    border-right: none;
  }
`
const RightCol = styled(Col)`
  margin-top: 1rem;
  ul {
    padding-left: 0;
    .custom-li {
      display: flex;
      justify-content: flex-start;
      position: relative;
      left: -0px;
      svg {
        position: relative;
        top: -37px;
        fill: ${Theme.hex('primary')};
      }
      span {
        span {
          color: ${Theme.hex('primary')};
        }
      }
      :nth-of-type(2) {
        left: -6px;
        svg {
          left: 3px;
          transform: scale(.8);
        }
      }
      :nth-of-type(3) {
        // left: -6px;
        svg {
          transform: scale(1.1);
        }
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    .custom-li {
      :nth-of-type(2) {
        top: 9px;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .custom-li {
      :nth-of-type(2) {
        left: -8px !important;
      }
    }
  }
`
const FormWrap = styled.div`
  &.hide {
    padding-top: 0;
    opacity: 0;
    height: 0;
    transition: all .3s ease;
  }
  &.show {
    padding-top: 1rem;
    opacity: 1;
    height: auto;
    transition: all .3s ease;
  }
`
 
const WhatIsVisionsTMA = ({ data }) => {
  const [showForm, setShowForm] = useState(false);
  const { lp } = data;
  // console.log(data)
  const { shortText1, shortText2, shortText3, shortText4, shortText5, shortText6, shortText7, shortText8, richText1, richText2, richText3, richText4, file1, file2 } = lp;
  const previewFluid = get(file2, "fluid")
  const previewTitle = get(file2, "title")

  const CustomListItem = ({ boldCopy, copy }) => (
    <div className="custom-li">
      <IoMdArrowDropright size="6rem" /> 
      <span><span>{boldCopy}</span>{copy}</span>
    </div>
  )
  const options = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node) => {
        console.log("node: ", node)
        const boldCopy = get(node.content[0].content[0], "value")
        const copy = get(node.content[0].content[1], "value")
        return <CustomListItem boldCopy={boldCopy} copy={copy} />
      }
    }
  }

  return (
    <Wrap>
      <WhatIsHeaderAndHero titleLine1={shortText1} titleLine2={shortText2} bg={file1} />
      <PullUp>
        <PreviewWrap>
          <Img fluid={previewFluid} alt={previewTitle} />
        </PreviewWrap>
        <Container>
          <Row>
            <Col>
              {documentToReactComponents(richText1.json)}
            </Col>
          </Row>
          <Row>
            <Col style={{display: 'flex', justifyContent: 'center'}}>
              <CTA href={shortText4} target="_blank" rel="noopener noreferrer">
                {shortText3}
              </CTA>
            </Col>
          </Row>
          <Row>
            <LeftCol md={12} lg={6}>
              <div>
                {documentToReactComponents(richText2.json)}
              </div>
              <div className="tma-cta-wrap centered">
                <p>{shortText5}</p>
                <a href={shortText7} target="_blank" rel="noopener noreferrer">
                  {shortText6}
                </a>
              </div>
            </LeftCol>
            <RightCol md={12} lg={6}>
              {documentToReactComponents(richText3.json, options)}
            </RightCol>
          </Row>
          <Row className="border-top-bot">
            <Col className="centered">
              {documentToReactComponents(richText4.json)}
              <button onClick={() => setShowForm(true)} aria-label="dropdown form to contact Vision Graphics">
                {shortText8}
              </button>
              <FormWrap className={showForm ? "show" : "hide"}>
                <Form />
              </FormWrap>
            </Col>
          </Row>
        </Container>
      </PullUp>
    </Wrap>
  )
}
 
export default WhatIsVisionsTMA