import { Sizes } from "~/config/global";
import ModalComponent from "../common/modal_component";

interface DisplayModalInterface {
  isDisplay: boolean;
  setDisplayModal: (setter: boolean) => void;
}
const DisplayModalComponent: React.FC<DisplayModalInterface> = ({
  isDisplay,
  setDisplayModal,
}) => {
  return (
    <ModalComponent
      isDisplay={isDisplay}
      buttons={[
        {
          title: "Close",
          func: () => {
            setDisplayModal(false);
          },
        },
        {
          title: "Submit",
          func: () => {
            setDisplayModal(false);
          },
        },
      ]}
      onClose={() => {
        setDisplayModal(false);
      }}
      modalSize={Sizes.md}
    >
      test2
    </ModalComponent>
  );
};
export default DisplayModalComponent;
