import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { WmkLink } from "wmk-link";
import { Img, WmkImage } from "wmk-image";

const Wrap = styled.footer`
  background: #2c2b2a;
  padding: 3vw 0;
  .center {
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

const VisionFooter = () => {
  const { options } = useStaticQuery(graphql`
    {
      options: contentfulGlobal {
        logo {
          ...NodeImageFields
          gatsbyImageData
        }
      }
    }
  `);
  const { logo } = options;
  return (
    <Wrap>
      <Container>
        <Row>
          <Col className="center">
            <WmkLink to={"https://visiongraphics-inc.com/"}>
              <WmkImage image={new Img(logo)} />
            </WmkLink>
          </Col>
        </Row>
      </Container>
    </Wrap>
  );
};

export default VisionFooter;
