import React, {useState} from "react";
import Layout from "../components/layout/AngledLayout/AngledLayout";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import AngledPageTitle from "../components/routes/TMA-LP/AngledPageTitle";
import CopyAndPreview from "../components/routes/TMA-LP/CopyAndPreview/CopyAndPreview";
import SSForm from "../components/routes/TMA-LP/SSForm";
import ThankYou from "../components/routes/TMA-LP/ThankYou";
import Theme from "../vars/ThemeOptions";
// import SharpSpringForm from "../components/common/SharpForm";

const ContentWrap = styled(Container)`
  padding-right: 0 !important;
  padding-left: 0 !important; 
  overflow: hidden !important;
  position: relative;
`;

export default ({ pageContext, data }) => {
  const [formSent, setFormSent] = useState(false);
  const updateFormSent = () => {
    setFormSent(true);
    setTimeout(document.getElementById("hidden-auto-download").click(), 3000);
  }
  const { lp } = data;
  // console.log(data)
  const { title, slug, pageTitleFirstLine, pageTitleSecondLine, pageSubtitle, mainCopy, buttonText, formCopy, bookPreviewPages, download, thankYouTitle, thankYouCopy, downloadButtonCopy, downloadPreview } = lp;
  return (
    <Layout>
      <ContentWrap fluid>
        <div className="main-page" style={formSent ? {opacity: 0, height: '43rem'} : null}>
          <AngledPageTitle firstLine={pageTitleFirstLine} secondLine={pageTitleSecondLine} subtitle={pageSubtitle} buttonText={buttonText} />
          <CopyAndPreview copy={mainCopy} preview={bookPreviewPages} formCopy={formCopy} />
          <SSForm formCopy={formCopy} download={download} formSubmit={updateFormSent} />
        </div>
        {formSent &&
          <ThankYou thankYouTitle={thankYouTitle} thankYouCopy={thankYouCopy} downloadButtonCopy={downloadButtonCopy} downloadPreview={downloadPreview} />
        }
      </ContentWrap>
      <a id="hidden-auto-download" download="../components/routes/TMA-LP/Tangible_Marketing_Automation.pdf" href="../components/routes/TMA-LP/Tangible_Marketing_Automation.pdf" style={{opacity: 0}}>hidden auto download</a>
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
      download: bookletPdf {
        file {
          url
        }
      }
      thankYouTitle
      thankYouCopy
      downloadButtonCopy
      downloadPreview {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
