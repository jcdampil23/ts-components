import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { delay } from "~/config/global";
import { display_animation_helper } from "~/helpers/animation_helper";
import useCollapseHelper from "~/helpers/collapse_helper";
import CollapsableComponent from "./collapsable_component";

interface AccordionComponentProps {
  accordionSize?: string;
  accordionList?: Array<{ title: string; content: string }>;
}
const AccordtionComponent: React.FC<AccordionComponentProps> = ({
  accordionSize = "md:w-3/5",
  accordionList,
}) => {
  return (
    <>
      <main className={`${accordionSize} flex flex-col`}>
        {accordionList?.map((content, index) => {
          return (
            <React.Fragment key={index}>
              <AccordionList title={content.title} content={content.content} />
            </React.Fragment>
          );
        })}
      </main>
    </>
  );
};

interface AccordionListProps {
  title?: string;
  content?: string;
}
export const AccordionList: React.FC<AccordionListProps> = ({
  title,
  content,
}) => {
  const [boolShow, setBoolShow] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col">
        <div
          onClick={() => setBoolShow(!boolShow)}
          className="flex cursor-pointer flex-row border border-solid border-b-slate-300 bg-white py-4 px-4 font-bold hover:bg-slate-100"
        >
          <h2 className="w-11/12">{title}</h2>
          <h2 className={`item-end flex w-1/12 justify-end`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                boolShow ? "rotate-0" : "rotate-180"
              } z-0 h-6 w-6 transition-transform ease-out`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h2>
        </div>
        <CollapsableComponent
          boolShow={boolShow}
          className=" z-0 flex flex-col gap-2 overflow-hidden bg-gray-100 px-4 transition-all ease-in-out"
        >
          <p>{content}</p>
        </CollapsableComponent>
      </div>
    </>
  );
};

export default AccordtionComponent;
