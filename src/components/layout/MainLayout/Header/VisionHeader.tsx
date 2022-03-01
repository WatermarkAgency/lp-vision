import React from "react";
import styled from "styled-components";
import VisionAngle from "./VisionAngle";
import { WmkLink } from "wmk-link";
import OneVisionLogo from "../../OneVisionLogo";
import { SiteMetaDataFields } from "../../../../fragments/NodeSiteMetadata";
import { graphql, useStaticQuery } from "gatsby";

const HeaderWrap = styled.div`
  position: relative;
  .angle {
    position: absolute;
    opacity: 0.85;
  }
`;

const Wrap = styled.div`
  padding: 4vh 6vw;
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
    <HeaderWrap>
      <Wrap>
        <WmkLink to={data.site.siteMetadata.homeUrl}>
          <OneVisionLogo />
        </WmkLink>
      </Wrap>
      <VisionAngle />
    </HeaderWrap>
  );
};

export default VisionHeader;