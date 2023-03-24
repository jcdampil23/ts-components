import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { delay } from "~/config/global";
import { display_animation_helper } from "~/helpers/animation_helper";
import useCollapseHelper from "~/helpers/collapse_helper";

export const CollapsableComponent: React.FC<{
  children?: ReactNode;
  boolShow: boolean;
  className: string;
}> = ({ children, boolShow, className }) => {
  const { intHeight, contentRef } = useCollapseHelper(boolShow);
  return (
    <>
        <div
          ref={contentRef}
          style={{ height: intHeight }}
          className={`${intHeight == "0px" ? "py-0" : "py-2"} ${className}`}
        >
          {children}
        </div>
    </>
  );
};

export default CollapsableComponent;
