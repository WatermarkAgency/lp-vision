import React from "react";
import { graphql } from "gatsby";
import TMALP from "../components/routes/TMA-LP/TMALP";
import LookbookDownloadLP from "../components/routes/LookbookDownload/LookbookDownloadLP";
import WhatIsVisionsTMA from "../components/routes/WhatIsTMA/WhatIsTMAPage";
import { ContentfulImageQuery } from "wmk-image";
import { WmkSeo } from "wmk-seo";
import { SiteMetaDataFields } from "../fragments/NodeSiteMetadata";

export default ({
  pageContext,
  data
}: {
  pageContext: { slug: string };
  data: PageAngledQuery;
}) => {
  // console.log(data)
  let JSX: React.ReactNode = null;
  switch (pageContext.slug) {
    case "tangible-marketing-automation":
      JSX = <TMALP data={data} />;
      break;
    case "lookbook-download":
      JSX = <LookbookDownloadLP data={data} />;
      break;
    case "what-is-visions-tangible-marketing-automation":
      JSX = <WhatIsVisionsTMA data={data} />;
      break;
    default:
      JSX = <h3>Sorry, this page hasn't been created yet.</h3>;
  }

  return (
    <>
      <WmkSeo.Meta
        title={data.lp.title}
        siteTitle={data.site.siteMetadata.title}
        slug={data.lp.slug}
        baseUrl={data.site.siteMetadata.baseUrl}
      />
      {JSX}
    </>
  );
};

export interface AngledLandingPageQuery {
  title: string;
  slug: string;
  shortText1?: string;
  shortText2?: string;
  shortText3?: string;
  shortText4?: string;
  shortText5?: string;
  shortText6?: string;
  shortText7?: string;
  shortText8?: string;
  richText1?: {
    raw: string;
  };
  richText2?: {
    raw: string;
  };
  richText3?: {
    raw: string;
  };
  richText4?: {
    raw: string;
  };
  files: ContentfulImageQuery;
  file1: ContentfulImageQuery;
  file2: ContentfulImageQuery;
}

interface PageAngledQuery {
  site: SiteMetaDataFields;
  lp: AngledLandingPageQuery;
}

export const query = graphql`
  query pageAngledQuery($slug: String!) {
    site {
      ...SiteMetadataFields
    }
    lp: contentfulLandingPagesAngled(slug: { eq: $slug }) {
      title
      slug
      shortText1
      shortText2
      shortText3
      shortText4
      shortText5
      shortText6
      shortText7
      shortText8
      richText1 {
        raw
      }
      richText2 {
        raw
      }
      richText3 {
        raw
      }
      richText4 {
        raw
      }
      files {
        ...NodeImageFields
        gatsbyImageData
      }
      file1 {
        ...NodeImageFields
        gatsbyImageData
      }
      file2 {
        ...NodeImageFields
        gatsbyImageData
      }
    }
  }
`;
