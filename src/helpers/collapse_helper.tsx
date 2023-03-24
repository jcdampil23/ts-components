import { Ref, RefObject, useLayoutEffect, useRef, useState } from "react";

const useCollapseHelper = (
  isShow: boolean
): { intHeight: string; contentRef: Ref<HTMLDivElement> } => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [intHeight, setIntHeight] = useState<string>("0px");

  const toggleShow = () => {
    if (isShow) {
      const childNodes = contentRef?.current?.children;
      if (childNodes) {
        const number = Array.from(childNodes).reduce((acc, node) => {
          const scrollHeight = node?.scrollHeight || 0;
          return acc + scrollHeight;
        }, 0);
        setIntHeight(`${number + childNodes.length * 15}px`);
      }
    } else {
      setIntHeight("0px");
    }
  };

  useLayoutEffect(() => {
    toggleShow();
  }, [isShow]);

  return { intHeight, contentRef };
};
export default useCollapseHelper;
