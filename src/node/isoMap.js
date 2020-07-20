import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
// import Header from '../components/routes/IsometricMap/Header'
import IsoMapPage from '../components/routes/IsometricMap/IsoMap/IsoMapPage'
 
const Wrap = styled.div`
 
`
 
const isoMap = ({ pageContext, data }) => {
  console.log("sectionsData: ", data.isoMap.sections)
  return (
    <Wrap>
      {/* <Header /> */}
      <IsoMapPage sectionsData={data.isoMap.sections} />
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