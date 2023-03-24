import { type NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import AccordtionComponent from "~/components/common/accordion_component";
import ModalComponent from "~/components/common/modal_component";
import DisplayModalComponent from "~/components/dashboard_components/display_modal_component";
import { PAGE_URL, Sizes, UserInterface } from "~/config/global";

const Dashboard: NextPage<{
  users: Array<{ id: number; name: string; userRole: number }>;
  fakeData: Array<{ data: string; id: number; author: number }>;
}> = ({ users, fakeData }) => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <DisplayModalComponent
        isDisplay={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] py-6">
        <div className="container flex w-3/5 grid-cols-3 items-center gap-2 rounded-md bg-neutral-50 px-4 py-6">
          <Link
            className="flex max-w-xs flex-col rounded-xl bg-[#2e026d] px-4 py-2 text-white hover:bg-[#15162c]"
            href={PAGE_URL}
          >
            <h3 className="text-base font-bold">Back</h3>
          </Link>
          <button
            className="flex max-w-xs flex-col rounded-xl bg-[#2e026d]  px-4 py-2 text-white hover:bg-[#15162c]"
            onClick={() => setDisplayModal(true)}
          >
            <h3 className="text-base font-bold">Open Modal →</h3>
          </button>
        </div>
        <div className="container mt-5 flex w-3/5 grid-cols-3 flex-col items-center gap-2 rounded-md bg-neutral-50 px-4 py-6">
          <h1 className="text-xl font-bold">Accordion Component</h1>
          <AccordtionComponent
            accordionSize={Sizes.fl}
            accordionList={[
              {
                title: "Item One",
                content:
                  "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
              },
              {
                title: "Item Two",
                content:
                  "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};
export default Dashboard;
