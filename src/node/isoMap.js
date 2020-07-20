import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
// import Header from '../components/routes/IsometricMap/Header'
import IsoMap from '../components/routes/IsometricMap/IsoMap'
 
const Wrap = styled.div`
 
`
 
const isoMap = ({ pageContext, data }) => {
  console.log("isoMap data: ", data.isoMap.sections)
  return (
    <Wrap>
      {/* <Header /> */}
      <IsoMap sectionsData={data.isoMap.sections} />
    </Wrap>
  )
}
 
export default isoMap

export const query = graphql`
  query isoMapQuery($slug: String!) {
    isoMap: contentfulIsometricMapPage(slug: { eq: $slug }) {
      slug
      title
      sections {
        title
        backgroundOnHover {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        sectionPieces {
          title
          copy {
            json
          }
          pieceImage {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`