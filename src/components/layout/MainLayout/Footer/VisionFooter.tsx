import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { WmkLink } from "wmk-link";
import { COLORS } from "../../../../vars/colors";
import OneVisionLogo from "../../OneVisionLogo";
import { graphql, useStaticQuery } from "gatsby";
import { SiteMetaDataFields } from "../../../../fragments/NodeSiteMetadata";
const Wrap = styled.footer`
  background: ${COLORS.DARK_BLUE};
  padding: 3vw 0;
  .center {
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

const VisionFooter = () => {
  const data: { site: SiteMetaDataFields } = useStaticQuery(graphql`
    {
      site {
        ...SiteMetadataFields
      }
    }
  `);
  return (
    <Wrap>
      <Container>
        <Row>
          <Col className="center">
            <WmkLink to={data.site.siteMetadata.homeUrl}>
              <OneVisionLogo color="white" />
            </WmkLink>
          </Col>
        </Row>
      </Container>
    </Wrap>
  );
};

export default VisionFooter;
