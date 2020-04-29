import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { CtflLogo } from "wmk-lib";

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
          file {
            contentType
            url
          }
          fixed(width: 267, height: 67) {
            ...GatsbyContentfulFixed
          }
          title
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
            <CtflLogo
              contentType={logo.file.contentType}
              fixed={logo.fixed}
              alt={logo.title}
              target="_self"
              to={"https://visiongraphics-inc.com/"}
            />
          </Col>
        </Row>
      </Container>
    </Wrap>
  );
};

export default VisionFooter;
