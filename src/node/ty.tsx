import React from "react";
import Layout from "../components/layout/MainLayout/MainLayout";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import TYHero from "../components/routes/ThankYou/ThankYouHero";
import styled from "styled-components";
import { ContentfulImageQuery, Img } from "wmk-image";
import { SiteMetaDataFields } from "../fragments/NodeSiteMetadata";
import { WmkSeo } from "wmk-seo";
const MessageWrap = styled(Container)`
  background: #f5f5f5;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .message {
    padding: 6vw 0;
  }
  min-height: 40vh;
`;

export default ({ data }: ThankYouPageQuery) => {
  const { ty, site } = data;
  const { headline, image, message } = ty;
  return (
    <Layout>
      <WmkSeo.Meta
        title={headline ? headline : "Thanks!"}
        siteTitle={site.siteMetadata.title}
        slug={ty.slug}
        baseUrl={site.siteMetadata.baseUrl}
      />
      <TYHero bgImage={new Img(image!)} headline={headline ? headline : ""} />
      <MessageWrap fluid>
        <Container>
          <Row>
            <Col>
              {message?.copy ? (
                <h2 className="message">{message.copy}</h2>
              ) : null}
            </Col>
          </Row>
        </Container>
      </MessageWrap>
    </Layout>
  );
};

interface ThankYouPageQuery {
  data: {
    ty: {
      slug: string;
      title: string;
      headline?: string;
      image?: ContentfulImageQuery;
      message?: { copy: string };
    };
    site: SiteMetaDataFields;
  };
}

export const query = graphql`
  query lpQuery($slug: String!) {
    ty: contentfulThankYouPages(slug: { eq: $slug }) {
      slug
      title
      headline
      image: backgroundImage {
        ...NodeImageFields
        gatsbyImageData
      }
      message {
        copy: message
      }
    }
    site {
      ...SiteMetadataFields
    }
  }
`;
