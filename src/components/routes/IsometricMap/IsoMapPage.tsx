import * as React from "react";
import Hero from './Layout/Hero'
import IsoMap from './IsoMap/IsoMapComponent'
 

 
const IsoMapPage = ({ sectionsData, heroBG }) => {
  return (
    <>
      <Hero bg={heroBG} />
      <IsoMap sectionsData={sectionsData} />
    </>
  )
}
 
export default IsoMapPage