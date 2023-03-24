import { ReactNode, useEffect, useMemo, useState } from "react";
import { display_animation_helper } from "~/helpers/animation_helper";

const useModalEffect = (
  isDisplay: boolean,
  boolSetShow: (value: string) => void,
  setTransitionClasses: (value: string) => void
) => {
  const memoizedEffect = useMemo<() => void>(() => {
    return () => {
      display_animation_helper(
        () => boolSetShow("fixed"),
        () => boolSetShow("hidden"),
        () =>
          setTransitionClasses(isDisplay ? "translate-y-0" : "-translate-y-40"),
        isDisplay,
        50
      ).catch(() => undefined);
    };
  }, [isDisplay]);
  useEffect(memoizedEffect, [memoizedEffect]);
};

const ModalComponent: React.FC<{
  isDisplay: boolean;
  modalSize?: string;
  title?: string;
  buttons: Array<{ title: string; func: () => void }>;
  onClose: () => void;
  children?: ReactNode;
}> = ({
  isDisplay = false,
  modalSize = "md:w-3/5",
  title = "Modal Title",
  buttons,
  onClose,
  children,
}) => {
  const [boolShow, boolSetShow] = useState<string>("hidden");
  const [transitionClasses, setTransitionClasses] =
    useState<string>("-translate-y-40");
  useModalEffect(isDisplay, boolSetShow, setTransitionClasses);

  return (
    <>
      <main
        className={`${boolShow} flex h-screen w-screen justify-center bg-black bg-opacity-50 z-50`}
        onClick={onClose}
      >
        <div
          className={`${modalSize} ${transitionClasses} m-20 h-fit bg-slate-100 transition-transform ease-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between px-10 py-5">
            <h1 className="text-xl">{title}</h1>
            <div
              className="text-md inline cursor-pointer align-top"
              onClick={onClose}
            >
              X
            </div>
          </div>
          <hr />
          <div className="px-10 py-5">{children}</div>
          <hr />
          <div className="flex justify-end gap-2 px-10 py-5">
            {buttons?.map((data) => {
              return (
                <>
                  <div
                    className="flex max-w-xs cursor-pointer flex-col rounded-md bg-[#2e026d] p-2 text-white"
                    onClick={data.func}
                  >
                    {data.title}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default ModalComponent;
