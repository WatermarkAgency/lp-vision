import { BLOCKS } from "@contentful/rich-text-types";
import { Img, WmkImage } from "wmk-image";
import * as React from "react";
import styled from "styled-components";
import { EmbeddedBlock } from "./Blocks";

const ImageWrap = styled.div`
  max-height: 40rem;
  margin: 2rem 0;
  * {
    max-height: 40rem;
  }
`;

const ListWrapper = styled.div`
  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    display: flex;
    position: relative;
  }
  svg {
    position: relative;
    top: 0.5vh;
    margin-right: 1rem;
  }
`;

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const references = node.references;
      const image = references?.gatsbyImageData ? new Img(references) : null;
      return (
        image && (
          <ImageWrap>
            <WmkImage image={image} />
          </ImageWrap>
        )
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = new EmbeddedBlock(node);
      return entry.render();
    }
  }
};
