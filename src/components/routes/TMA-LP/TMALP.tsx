import React, { useState } from "react";
import Layout from "../../layout/AngledLayout/AngledLayout";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import AngledPageTitle from "./AngledPageTitle";
import CopyAndPreview from "./CopyAndPreview/CopyAndPreview";
import { NetlifyForm } from "wmk-netlify-form";
import ThankYou from "./ThankYou";
import { AngledLandingPageQuery } from "../../../node/pageAngled";
import { RichText } from "wmk-rich-text";
import { Img } from "wmk-image";
import { FormHeader, FormWrap } from "./SSForm";
// import SharpSpringForm from "../components/common/SharpForm";

const ContentWrap = styled(Container)`
  padding-right: 0 !important;
  padding-left: 0 !important;
  overflow: hidden !important;
  position: relative;
`;

const TMALP = ({ data }: { data: { lp: AngledLandingPageQuery } }) => {
  const [formSent, setFormSent] = useState(false);
  const updateFormSent = () => {
    setFormSent(true);
    setTimeout(document.getElementById("hidden-auto-download").click(), 3000);
  };
  const { lp } = data;
  // console.log(data)
  const {
    shortText1,
    shortText2,
    shortText3,
    shortText4,
    shortText5,
    shortText6,
    richText1,
    files,
    file1,
    shortText7,
    shortText8,
    file2
  } = lp;
  return (
    <Layout>
      <ContentWrap fluid>
        <div
          className="main-page"
          style={formSent ? { opacity: 0, height: "43rem" } : undefined}>
          <AngledPageTitle
            firstLine={shortText1}
            secondLine={shortText2}
            subtitle={shortText3}
            buttonText={shortText4}
          />
          <CopyAndPreview
            copy={new RichText(richText1!)}
            preview={Array.isArray(files) ? files.map((f) => new Img(f)) : []}
          />
          <FormHeader formCopy={shortText5!} />
          <FormWrap>
            <NetlifyForm
              config={{ name: "tma_form" }}
              fields={[
                { as: `name` },
                { as: `email` },
                { as: `single`, props: { name: "company", label: `Company` } },
                { as: `address` }
              ]}
            />
          </FormWrap>
        </div>
        {formSent && (
          <ThankYou
            thankYouTitle={shortText6}
            thankYouCopy={shortText7}
            downloadButtonCopy={shortText8}
            downloadPreview={file2}
          />
        )}
      </ContentWrap>
      <a
        id="hidden-auto-download"
        download="https://downloads.ctfassets.net/5235n2cu1xlz/42sruUPvBAl1wc1L01Za0K/e098cf5604f03b4e26453ce28f68d467/Tangible_Marketing_Automation.pdf"
        href="https://downloads.ctfassets.net/5235n2cu1xlz/42sruUPvBAl1wc1L01Za0K/e098cf5604f03b4e26453ce28f68d467/Tangible_Marketing_Automation.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ opacity: 0 }}>
        hidden auto download
      </a>
    </Layout>
  );
};

export default TMALP;
