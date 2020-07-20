import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
 
const Wrap = styled.div`
  width: 100vw;
  height: 80vh;
  .bgs-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 1;
      transition: opacity .3s ease;
      &.hidden {
        opacity: 0;
        transition: opacity .3s ease;
      }
    }
  }
`
 
const IsoMap = ({ sectionsData }) => {
  return (
    <Wrap>
      <div className="bgs-wrap">
        {sectionsData.map((section, i) => {
          const bg = section.backgroundOnHover;
          const { fluid } = bg ? bg : null
          return(
            <div className={`bg` + ` section-` + i} key={section.title + i}>
              <Img fluid={fluid} alt={bg.title} />
            </div>
          )
        })}
      </div>
    </Wrap>
  )
}
 
export default IsoMap