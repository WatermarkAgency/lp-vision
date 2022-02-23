import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Theme from "../../../../vars/ThemeOptions";
import { WmkLink } from "wmk-link";
import { SiteMetaDataFields } from "../../../../fragments/NodeSiteMetadata";
import OneVisionLogo from "../../OneVisionLogo";
import { COLORS } from "../../../../vars/colors";

const StyledHeaderWrap = styled.div`
  position: relative;
  .logo-wrap {
    width: 25%;
    height: auto;
    padding: 5% 0;
    margin-bottom: 6vw;
  }
  .bg-div {
    position: absolute;
    top: -20%;
    left: -5%;
    z-index: -10;
    height: 20vw;
    width: 110%;
    background: ${COLORS.DARK_BLUE};
    transform: ${Theme.transform.angle};
    border-bottom: 10px solid ${COLORS.LIGHT_BLUE};
  }
  @media only screen and (max-width: 800px) {
    .logo-wrap {
      width: 60%;
      margin-left: 20%;
    }
    .bg-div {
      height: 30vw;
      width: 110%;
      border-bottom: 15px solid gray;
    }
  }
`;

const VisionHeader = () => {
  const data: { site: SiteMetaDataFields } = useStaticQuery(graphql`
    {
      site {
        ...SiteMetadataFields
      }
    }
  `);
  return (
    <StyledHeaderWrap>
      <Container>
        <div className="logo-wrap">
          <WmkLink to={data.site.siteMetadata.homeUrl}>
            <OneVisionLogo color="white" />
          </WmkLink>
        </div>
      </Container>
      <div className="bg-div" />
    </StyledHeaderWrap>
  );
};

export default VisionHeader;
