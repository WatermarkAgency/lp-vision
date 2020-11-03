import React from "react";
import { graphql } from "gatsby";
// import SharpSpringForm from "../components/common/SharpForm";
import TMALP from '../components/routes/TMA-LP/TMALP'
import LookbookDownloadLP from "../components/routes/LookbookDownload/LookbookDownloadLP";

export default ({ pageContext, data }) => {
  // console.log(data)
  let JSX = null
  switch(pageContext.slug) {
    case "tangible-marketing-automation":
      JSX = <TMALP data={data} />;
      break;
    case "lookbook-download":
      JSX = <LookbookDownloadLP data={data} />;
      break;
    default:
      JSX = <h3>Sorry, this page hasn't been created yet.</h3>
  }

  return (
    <>
      {JSX}
    </>
  );
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
        json
      }
      richText2 {
        json
      }      
      files {
        title
        fluid(maxWidth: 2000, quality: 75) {
          ...GatsbyContentfulFluid
        }
      }
      file1 {
        file {
          url
        }
      }
      file2 {
        title
        fluid(maxWidth: 2000, quality: 75) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;


    // <Layout>
    //   <ContentWrap fluid>
    //     <div className="main-page" style={formSent ? {opacity: 0, height: '43rem'} : null}>
    //       <AngledPageTitle firstLine={shortText1} secondLine={shortText2} subtitle={shortText3} buttonText={shortText4} />
    //       <CopyAndPreview copy={richText1} preview={files} formCopy={shortText5} />
    //       <SSForm formCopy={shortText5} download={file} formSubmit={updateFormSent} />
    //     </div>
    //     {formSent &&
    //       <ThankYou thankYouTitle={shortText6} thankYouCopy={shortText7} downloadButtonCopy={shortText8} downloadPreview={file2} />
    //     }
    //   </ContentWrap>
    //   <a id="hidden-auto-download" download="https://downloads.ctfassets.net/5235n2cu1xlz/42sruUPvBAl1wc1L01Za0K/e098cf5604f03b4e26453ce28f68d467/Tangible_Marketing_Automation.pdf" href="https://downloads.ctfassets.net/5235n2cu1xlz/42sruUPvBAl1wc1L01Za0K/e098cf5604f03b4e26453ce28f68d467/Tangible_Marketing_Automation.pdf" target="_blank" rel="noopener noreferrer" style={{opacity: 0}}>hidden auto download</a>
    // </Layout>
