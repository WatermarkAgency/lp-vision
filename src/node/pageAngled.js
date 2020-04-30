import React from "react";
import Layout from "../components/layout/AngledLayout/AngledLayout";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import AngledPageTitle from "../components/routes/TMA-LP/AngledPageTitle";
import CopyAndPreview from "../components/routes/TMA-LP/CopyAndPreview/CopyAndPreview";
import SSForm from "../components/routes/TMA-LP/SSForm"
// import SharpSpringForm from "../components/common/SharpForm";

const ContentWrap = styled(Container)`
  padding-right: 0 !important;
  padding-left: 0 !important; 
  overflow: hidden;
`;

export default ({ pageContext, data }) => {
  const { lp } = data;
  // console.log(data)
  const { title, slug, pageTitleFirstLine, pageTitleSecondLine, pageSubtitle, mainCopy, buttonText, formCopy, bookPreviewPages } = lp;
  return (
    <Layout>
      <ContentWrap fluid>
        <AngledPageTitle firstLine={pageTitleFirstLine} secondLine={pageTitleSecondLine} subtitle={pageSubtitle} buttonText={buttonText} />
        <CopyAndPreview copy={mainCopy} preview={bookPreviewPages} formCopy={formCopy} />
        <SSForm />
      </ContentWrap>
    </Layout>
  );
};

export const query = graphql`
  query pageAngledQuery($slug: String!) {
    lp: contentfulLandingPagesAngled(slug: { eq: $slug }) {
      title
      slug
      pageTitleFirstLine
      pageTitleSecondLine
      pageSubtitle
      mainCopy {
        json
      }
      buttonText
      formCopy
      bookPreviewPages {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
