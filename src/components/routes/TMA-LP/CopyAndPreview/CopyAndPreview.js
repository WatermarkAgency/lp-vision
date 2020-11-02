import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PreviewSlider from './PreviewPDF'
 
const Wrap = styled.div`
  margin: 5vw 0;
  .rich-text-wrap {
    padding-right: 5vw;
    p:first-of-type {
      line-height: 2rem !important;
      margin-bottom: 2rem;
    }
    ul {
      margin-top: -10px;
      margin-left: 0;
      li {
        list-style-image: url("https://images.ctfassets.net/5235n2cu1xlz/1IoaWPxkpVoTMuAj3K3Wh4/e741df4123ea63f76dc17bd415072513/custom-bullet-spaceRight.png?h=250");
        p {
          margin-bottom: 1rem !important;
        }
      } 
    }
  }
  @media only screen and (max-width: 1006px) {
    margin-bottom: 55vw;
    .rich-text-col {
      position: relative;
      .rich-text-wrap {
        position: absolute;
        p:first-of-type {
          margin-bottom: 65vw;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    margin-top: 5rem;
    margin-bottom: 35rem;
    .rich-text-col {
      .rich-text-wrap {
        p:first-of-type {
          margin-bottom: 70vw;
        }
      }
    }
  }
  @media only screen and (max-width: 497px) {
    margin-bottom: 45rem;
    .rich-text-col {
      .rich-text-wrap {
        p:first-of-type {
          margin-bottom: 80vw;
        }
      }
    }
  }
`
 
const CopyAndPreview = ({ copy, preview, formCopy }) => {
  return (
    <Wrap>
      <Container>
        <Row>
          <Col md={12} lg={8} className="rich-text-col">
            <div className="rich-text-wrap">
              {documentToReactComponents(copy.json)}
            </div>
          </Col>
          <Col md={12} lg={4}>
            <PreviewSlider pages={preview}/>
          </Col>
        </Row>
      </Container>
    </Wrap>
  )
}
 
export default CopyAndPreview