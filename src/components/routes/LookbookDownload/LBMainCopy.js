import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { RichText } from 'wmk-lib'
import styled from 'styled-components'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { IoMdArrowDropright } from 'react-icons/io'
import Theme from '../../../vars/ThemeOptions'

const WrapCont = styled(Container)`
  .content-col {
    &.left {
      padding-right: 2rem;
      border-right: 1px solid ${Theme.hex('primary')};
      p {
        font-weight: normal;
        color: ${Theme.hex('textPrimary')};
      }
    }
    &.right {
      padding-left: 2rem;
      p {
        margin-bottom: 5px;
        color: ${Theme.hex('primary')};
        font-weight: bold;
      }
      ul {
        padding-left: 0;
        .custom-li {
          display: flex;
          justify-content: flex-start;
          position: relative;
          left: -11px;
          svg {
            position: relative;
            top: -5px;
            fill: ${Theme.hex('primary')};
            transform: scaleY(.8);
          }
          p {
            color: ${Theme.hex('textPrimary')};
            font-weight: 300;
            margin-bottom: 0;
            max-width: 90%;
          }
          :nth-of-type(2) {
            top: -4px;
          }
        }
      }
    }
  }
`
 
const LBMainCopy = ({ richText1, richText2 }) => {
  // console.log("richText2: ", richText2)
  const CustomListItem = ({ copy }) => (
    <div className="custom-li">
      <IoMdArrowDropright size="2rem" /> 
      <p>{copy}</p>
    </div>
  )
  const options = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node) => {
        // console.log("node: ", node)
        const { value } = node.content[0].content[0];
        return <CustomListItem copy={value} />
      }
    }
  }
  return (
    <WrapCont>
      <Row>
        <Col sm={12} md={6} className="content-col left">
          {documentToReactComponents(richText1.json)}
          {/* <RichText json={richText1.json} /> */}
        </Col>
        <Col sm={12} md={6} className="content-col right">
          {documentToReactComponents(richText2.json, options)}
          {/* <RichText json={richText2.json} /> */}
        </Col>
      </Row>
    </WrapCont>
  )
}
 
export default LBMainCopy