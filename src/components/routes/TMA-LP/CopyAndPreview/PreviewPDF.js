import React, { useState, useEffect, useRef } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Theme from '../../../../vars/ThemeOptions'
 
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .slider-title {
    font-size: .75rem;
    color: ${Theme.hex('orange')};
  }
  .container-fluid {
    position: relative;
    height: 31vw;
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
    .slider-row {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-left: 0;
      margin-right: 0;
      flex-wrap: nowrap;
      transition: left .5s ease;
      .slider-col {
        height: 100%;
        padding-left: 0;
        padding-right: 0;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
    .control-row {
      display: flex;
      flex-wrap: nowrap;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0%;
      background: rgba(0,0,0,.5);
      .control-col {
        width: 50%;
        button {
          width: 100%;
          color: ${Theme.hex('white')};
          background: none;
          border: none;
          &.prev-button {
            padding: 0 20% 5% 0;
          }
          &.next-button {
            padding: 0 0 5% 20%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1006px) {
    position: relative;
    height: 55vw;
    .slider-title {
      position: absolute;
      top: 17vw;
    }
    .container-fluid {
      position: absolute;
      top: 20vw;
      width: 56%;
      height: 55vw;
    }
  }
  @media only screen and (max-width: 800px) {
    height: 55vw;
    .slider-title {
      top: 24vw;
    }
    .container-fluid {
      top: 27vw;
    }
  }
  @media only screen and (max-width: 690px) {
    .slider-title {
      top: 31vw;
    }
    .container-fluid {
      top: 34vw;
    }
  }
  @media only screen and (max-width: 575px) {
    .slider-title {
      top: 42vw;
    }
    .container-fluid {
      top: 45vw; 
    }
  }
  @media only screen and (max-width: 497px) {
    .slider-title {
      top: 63vw;
    }
    .container-fluid {
      top: 68vw;
    }
  }
`
 
const PreviewPDF = ({ pages }) => {
  console.log(pages)
  const [slideWidth, setSlideWidth] = useState(0)
  const [active, setActive] = useState(0)

  const slideRef = useRef()

  useEffect(() => {
    const resize = () => {
        setSlideWidth(
            slideRef.current.offsetWidth
          );
          console.log(slideWidth)
    }
    resize()
    window.addEventListener("resize",resize)
    return () => window.removeEventListener("resize",resize)
  }, [active, slideWidth]);

  const updateActive = (dir, active) => {
    const total = pages.length;
    if (dir === "prev") {
      if (active > 0) {
        setActive(active - 1);
      } else {
        setActive(total - 1);
      }
    }
    if (dir === "next") {
      if (active < total - 1) {
        setActive(active + 1);
      } else {
        setActive(0);
      }
    }
  };

  return (
    <Wrap>
      <p className="slider-title">PREVIEW THE BOOK</p>
      <Container fluid>
        <Row className="slider-row" style={{left: -slideWidth * active + 1}}>
          {pages.map((page, i) => {
            return(
              <Col xs={12} className="slider-col" ref={slideRef}>
                <Img fluid={page.fluid} alt={page.title} />
              </Col>     
            )       
          })}
        </Row>
        <div className="control-row">
          <div className="control-col">
            <button className="prev-button" onClick={() => updateActive("prev", active)} ><IoIosArrowBack/></button>
          </div>
          <div className="control-col">
            <button className="next-button" onClick={() => updateActive("next", active)} ><IoIosArrowForward/></button>
          </div>
        </div>
      </Container>      
    </Wrap>
  )
}
 
export default PreviewPDF