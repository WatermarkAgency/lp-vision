import * as React from "react";
import { Img } from "wmk-image";
import WhatIsHeader from "./WhatIsHeader";
import WhatIsHero from "./WhatIsHero";

export interface WhatIsHeaderProps {
  titleLine1?: string;
  titleLine2?: string;
  bg?: Img;
}

const WhatIsHeaderAndHero = ({
  titleLine1,
  titleLine2,
  bg
}: WhatIsHeaderProps) => {
  return (
    <>
      <WhatIsHeader />
      <WhatIsHero
        titleLine1={titleLine1}
        titleLine2={titleLine2}
        bg={bg}
      />
    </>
  );
};

export default WhatIsHeaderAndHero;
