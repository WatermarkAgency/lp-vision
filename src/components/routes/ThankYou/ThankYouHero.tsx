import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Img, WmkImage } from "wmk-image";
import { COLORS } from "../../../vars/colors";

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
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      height: 100%;
      width: 8px;
      min-height: 90px;
      transform: translateY(-50%);
      background: ${COLORS.LIGHT_BLUE};
    }
  }
`;

const TYHero = ({ bgImage, headline }: { bgImage: Img; headline: string }) => {
  return (
    <Wrap fluid>
      <WmkImage image={bgImage} />
      <Row style={{ width: "100%", padding: "0 6vw" }}>
        <Col>
          <h1 className="headline">{headline}</h1>
        </Col>
      </Row>
    </Wrap>
  );
};

export default TYHero;
