import { graphql } from "gatsby";

export interface SiteMetaDataFields {
  siteMetadata: {
    title: string;
    description: string;
    author: string;
    homeUrl: string;
    baseUrl: string;
  };
}

export const NodeSiteMetaDataFields = graphql`
  fragment SiteMetadataFields on Site {
    siteMetadata {
      title
      description
      author
      homeUrl
      baseUrl
    }
  }
`;
