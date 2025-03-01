import Modal from "@/components/Modal";
// import LoginModal from "@/Modals/Login";
// import ScheduledEvent from "@/Modals/ScheduledEvent";
// import SettingsModal from "@/Modals/Settings";
import { JSX } from "react";
import { PageProps } from "../../../../.next/types/app/layout";

const ModalPage = async({ params }: PageProps) => {
  const { modal } = await params;
  console.log(modal)
  const modalContent: { [key: string]: JSX.Element } = {
    // login: <LoginModal />,
    // settings: <SettingsModal />,
    // createEvent: <ScheduledEvent id={null} />,
    // editEvent: <ScheduledEvent id={null} />,
  };

  return (
    <Modal title={modal.charAt(0).toUpperCase() + modal.slice(1)}>
      {modalContent[modal] || <p>Unknown Modal</p>}
    </Modal>
  );
}

export default ModalPage;