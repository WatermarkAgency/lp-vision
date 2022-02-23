import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { WmkLink } from "wmk-link";
import { SiteMetaDataFields } from "../../../../fragments/NodeSiteMetadata";
import { COLORS } from "../../../../vars/colors";
import Theme from "../../../../vars/ThemeOptions";
import OneVisionLogo from "../../../layout/OneVisionLogo";

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  .main,
  .bot-border {
    width: 95vw;
    height: auto;
    padding: 3vw 5rem 7rem 5vw;
    clip-path: polygon(0% 0%, 95% 0%, 0% 100%);
  }
  .main {
    position: relative;
    z-index: 10;
    background: ${Theme.hex("white")};
  }
  .bot-border {
    width: 103%;
    height: 103%;
    position: absolute;
    z-index: 9;
    top: 0;
    background: ${COLORS.LIGHT_BLUE};
  }
`;

const WhatIsHeader = () => {
  const data: { site: SiteMetaDataFields } = useStaticQuery(graphql`
    {
      site {
        ...SiteMetadataFields
      }
    }
  `);
  return (
    <Wrap>
      <div className="main">
        <WmkLink to={data.site.siteMetadata.homeUrl}>
          <OneVisionLogo />
        </WmkLink>
      </div>
      <div className="bot-border" />
    </Wrap>
  );
};

export default WhatIsHeader;
