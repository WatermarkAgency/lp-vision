import * as React from "react";
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { WmkImage as Img, Img as ImgClass } from 'wmk-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { AiOutlineClose } from 'react-icons/ai'

 
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
      <Container fluid className="inner-wrap">
        <button className="close-button" onClick={() => updateOpenPiece(null)}><p><AiOutlineClose /></p> <p>RETURN</p></button>
        <Row className="content-wrap">
          <Col sm={12} md={5} className="image-wrap">
            {/* <Img fluid={fluid} alt={image.title} /> */}
          </Col>
          <Col sm={12} md={7} className="copy-wrap">
            <p className="section">{section}</p>
            <p className="title">{title}</p>
            {/* {documentToReactComponents(copy.json)} */}
            <div className="cta-wrap">
              <p className="cta-copy-line-1">
                See how our capabilities tie into
              </p>
              <p className="cta-copy-line-2">
                Tangible Marketing Automation.
              </p>
              <a href="https://visiongraphics.netlify.app/lp/tangible-marketing-automation" target="_blank" rel="noopener noreferrer">
                Download our White Paper Today!
              </a>
            </div>
          </Col>      
        </Row>
      </Container>
      <button className="off-click" onClick={() => updateOpenPiece(null)} />
    </Wrap>
  )
}
 
export default Popup



const visOrange = '#F15C2B';

const Wrap = styled.div`
  position: absolute;
  z-index: 1000;
  top: -3rem;
  left: 0;
  width: 100vw;
  height: 120%;
  background: rgba(255,255,255,.9);
  padding: 20vw 5vw 20vw 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .inner-wrap {
    width: 100%;
    .content-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      .image-wrap {
        // width: 50%;
      }
      .copy-wrap {
        // width: 50%;
        padding: 0 5%;
        p {
          margin-bottom: 0;
          &.section {
            color: #767676;
            font-size: 1.5rem;
            font-weight: 300;
            text-transform: uppercase;
          }
          &.title {
            color: ${visOrange};
            font-size: 2.5rem;
            line-height: 2.25rem;
            font-weight: 600;
            text-transform: uppercase;
            position: relative;
            top: -5px;
          }
        }
        .cta-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 3vw;
          p {
            font-size: 1.1rem;
            color: ${visOrange};
          }
          a {
            position: relative;
            z-index: 1002;
            background: ${visOrange};
            color: white;
            padding: 10px 20px;
            margin-top: 10px;
            border-radius: 100px;
            font-size: 1.3rem;
            font-weight: 100;
            white-space: nowrap;
            transition: background .3s ease;
            &:hover {
              text-decoration: none;
              background: #db5427;
              transition: background .3s ease;
            }
          }
        }
      }
    }
  }
  .close-button {
    position: absolute;
    z-index: 50;
    top: 4vw;
    left: 9vw;
    border: none;
    background: none;
    color: ${visOrange};
    p {
      display: inline-block;
      font-weight: 400 !important;
      position: relative;
      :first-of-type {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
      }
      :last-of-type {
        font-size: 1.3rem;
        margin-top: -5px;
        top: 1.5px;
      }
    }
  }
  .off-click {
    position: absolute;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
  }
  @media only screen and (max-width: 767px) {
    .image-wrap {
      margin-top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .gatsby-image-wrapper {
        width: 50%;
      }
    }
    .copy-wrap {
      p {
        &.section {
          font-size: 1rem !important;
        }
        &.title {
          font-size: 2rem !important;
        }
        font-size: .8rem;
      }
      ul {
        li {
          line-height: .9rem;
        }
      }
      .cta-wrap {
        p {
          font-size: .8rem !important;
        }
        a {
          font-size: 1rem !important;
          position: relative;
          z-index: 1000000;
        }
      }
    }
    .close-button {
      top: 0vw;
      left: 5vw;
    }
  }
  // @media only screen and (max-width: 800px) {
  //   padding: 20vw 2vw;
  //   .inner-wrap {
  //     margin-top: 10vw;
  //   }
  //   .content-wrap {
  //     .image-wrap {
  //       width: 30% !important;
  //       .gatsby-image-wrapper {
  //         width: 100%;
  //       }
  //     }
  //     .copy-wrap {
  //       width: 70% !important;
  //       padding: 0 3% !important;
  //       .section {
  //         font-size: 1rem !important;
  //       }
  //       .title {
  //         font-size: 1.5rem !important;
  //       }
  //     }
  //   }
  //   .close-button {
  //     top: -1vw;
  //   }
  // }
  // @media only screen and (max-width: 600px) {
  //   .inner-wrap {
  //     margin-top: 30vw;
  //   }
  // }
`