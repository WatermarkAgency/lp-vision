import { graphql } from "gatsby";

export const NodeImageFields = graphql`
  fragment NodeImageFields on ContentfulAsset {
    title
    file {
      url
      contentType
    }
    description
  }
`;
