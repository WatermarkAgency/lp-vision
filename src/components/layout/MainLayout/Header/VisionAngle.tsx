import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { COLORS } from "../../../../vars/colors";

const VisionAngle = () => {
  const [winWidth, setWinWidth] = useState(0);
  const [stopLoop, setStopLoop] = useState(true);

  useEffect(() => {
    if (!stopLoop) {
      setStopLoop(true);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [stopLoop]);

  const handleResize = () => {
    const width = window.outerWidth;
    setWinWidth(width);
  };
  const angleHeight = (97 / 1920) * winWidth;
  return (
    <Container fluid style={{ padding: 0 }} className="angle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={winWidth}
        height={angleHeight}
        //viewBox="0 0 1920 97"
      >
        <path
          d={`M0,0H${winWidth}L0,${angleHeight}Z`}
          fill={COLORS.LIGHT_BLUE}
        />
      </svg>
    </Container>
  );
};

export default VisionAngle;
