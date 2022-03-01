import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "./richTextOption";
import * as React from "react";


export const RichTextReact = ({ content }) => {
  const { json } = { ...content };
  return <>{documentToReactComponents(json, options)}</>;
};
