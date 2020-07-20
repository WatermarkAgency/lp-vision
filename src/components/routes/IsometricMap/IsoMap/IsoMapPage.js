import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Offices from './Sections/Offices'
 
const Wrap = styled.div`
  width: 100vw;
  height: 57.48vw;
  .bgs-wrap {
    width: 100vw;
    height: 57.48vw;
    position: relative;
    z-index: 0;
    .bg {
      width: 100vw;
      height: 57.48vw;
      position: absolute;
      opacity: 1;
      transition: opacity .3s ease;
      &.hidden {
        opacity: 0;
        transition: opacity .3s ease;
      }
    }
  }
  .hover-secs-wrap {
    width: 100vw;
    height: 57.48vw;
    position: absolute;
    top: 0;
    z-index: 10;
    // background: blue;
    // opacity: .5;
  }
`
 
const IsoMapPage = ({ sectionsData }) => {
  const [currSec, setCurrSec] = useState(0)
  const updateCurrSec = (sec) => {
    setCurrSec(sec)
    console.log("currSec: ", currSec)
  }
  return (
    <Wrap>
      <div className="bgs-wrap">
        {sectionsData.map((section, i) => {
          const bg = section.backgroundOnHover;
          const { fluid } = bg ? bg : null
          return(
            <div className={currSec === i ? `bg` + ` section-` + i : `hidden bg` + ` section-` + i} key={section.title + i}>
              <Img fluid={fluid} alt={bg.title} />
            </div>
          )
        })}
      </div>
      <div className="hover-secs-wrap">
        <Offices updateCurrSec={updateCurrSec} />
      </div>
    </Wrap>
  )
}
 
export default IsoMapPage