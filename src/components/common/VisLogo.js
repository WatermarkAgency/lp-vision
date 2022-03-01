import * as React from "react";
 
const VisionLogoSVG = ({width, height}) => {
  return (
    <div>
      <a href="https://visiongraphics-inc.com/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/VisLogoLarge.png" alt="vision logo" style={{ minWidth: "150px", maxWidth: "500px", width: width ? width : "", height: height ? height : "" }} />
      </a>      
    </div>
  )
}
 
export default VisionLogoSVG