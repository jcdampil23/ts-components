import { delay } from "~/config/global";

export const display_animation_helper = async (
  functionShow: () => void,
  functionHide: () => void,
  functionTransition: () => void,
  show: boolean,
  delayNumber: number
) => {
  if (show) functionShow();
  await delay(10).then(() => functionTransition());
  if (!show) await delay(delayNumber).then(() => functionHide());
};
