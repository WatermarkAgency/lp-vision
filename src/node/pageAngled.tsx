import React from "react";
import { graphql } from "gatsby";
import TMALP from "../components/routes/TMA-LP/TMALP";
import LookbookDownloadLP from "../components/routes/LookbookDownload/LookbookDownloadLP";
import WhatIsVisionsTMA from "../components/routes/WhatIsTMA/WhatIsTMAPage";

export default ({ pageContext, data }) => {
  // console.log(data)
  let JSX = null;
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

  return <>{JSX}</>;
};

export const query = graphql`
  query pageAngledQuery($slug: String!) {
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
