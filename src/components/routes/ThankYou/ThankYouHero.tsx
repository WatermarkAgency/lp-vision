import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { WmkImage } from "wmk-image";

const Wrap = styled(Container)`
  position: relative;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .bg-image-wrap {
    position: absolute;
    z-index: -5;
    width: 100%;
    height: 100%;
    filter: brightness(0.75);
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }
  .headline {
    color: white;
    padding: 0 1rem;
    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      height: 100%;
      width: 8px;
      min-height: 90px;
      transform: translateY(-50%);
      background: #f15c2b;
    }
  }
`;

const TYHero = ({ bgImage, headline }) => {
  const { fluid } = bgImage ? bgImage : { fluid: null };
  return (
    <Wrap fluid>
      {fluid && (
        <div className="bg-image-wrap">
          {/* <Img fluid={fluid} alt={bgImage.title} /> */}
        </div>
      )}
      <Row style={{width: '100%',padding: '0 6vw'}}>
        <Col >
          <h1 className="headline">{headline}</h1>
        </Col>
      </Row>
    </Wrap>
  );
};

export default TYHero;
